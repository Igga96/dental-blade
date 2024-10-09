from django.db.models import Q
from django.urls import reverse
from django.contrib.auth import authenticate
from django.contrib.auth.tokens import default_token_generator
from django.contrib.sites.shortcuts import get_current_site
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, status, viewsets
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import OutstandingToken, BlacklistedToken

from drf_spectacular.utils import extend_schema, extend_schema_view

from dental_source import serializers as auth_serializers
from dental_source import models
from dental_source.utils import Util
from dental_source.permissions import AccessRoleScopePermission, CustomDjangoModelPermission, AppointmentPermission
from dental_source.filters import RoleBasedAccountFilter


@extend_schema_view(
    post=extend_schema(
        description="Авторизоваться с помощью логина и пароля.",
        tags=["Авторизация"],
        summary="Авторизоваться с помощью логина и пароля.",
    ),
)
class Login(APIView):
    permission_classes = (AllowAny,)
    serializer_class = auth_serializers.LoginSerializer

    def post(self, request):
        data = request.data
        login = data.get("login")
        password = data.get("password")

        if not login:
            raise ValidationError("Введите логин", code=status.HTTP_400_BAD_REQUEST)

        if not password:
            raise ValidationError("Введите пароль", code=status.HTTP_400_BAD_REQUEST)

        user = authenticate(login=login, password=password)
        if user is None:
            raise ValidationError("Такого пользователя не существует.", code=status.HTTP_401_UNAUTHORIZED)

        refresh = RefreshToken.for_user(user)

        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_200_OK)


@extend_schema_view(
    post=extend_schema(
        description="Выйти из системы.",
        tags=["Авторизация"],
        summary="Выйти из системы.",
    ),
)
class Logout(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        tokens = OutstandingToken.objects.filter(user_id=request.user.id)

        for token in tokens:
            t, _ = BlacklistedToken.objects.get_or_create(token=token)

        return Response(status=status.HTTP_205_RESET_CONTENT)


@extend_schema_view(
    post=extend_schema(
        description="Зарегестрироваться.",
        tags=["Авторизация"],
        summary="Зарегестрироваться.",
    ),
)
class Registration(APIView):
    permission_classes = (AllowAny,)
    serializer_class = auth_serializers.RegistrationSerializer

    def post(self, request):
        data = request.data
        login = request.data.get("login")
        email = request.data.get("email")

        user = models.Account.objects.filter(Q(login=login) | Q(email=email)).first()

        # 3 кейса
        if user and user.is_active:
            raise ValidationError(
                detail="В системе уже существует пользователь с такими данными.",
                code=status.HTTP_403_FORBIDDEN,
            )
        elif not user:
            serializer = self.serializer_class(data=data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save()

            user.is_active = False
            user.save()

        confirmation_token = default_token_generator.make_token(user)

        relative_link = reverse(
            'confirm_email',
            kwargs={"user_id": user.id, "confirmation_token": confirmation_token}
        )

        activation_link = 'http://' + get_current_site(request).domain + relative_link

        email_body = f"Добрый день, {user.login}. + <br>" \
                     f" Используйте ссылку ниже для подтверждения вашего аккаунта. <br> {activation_link}"

        data = {'email_body': email_body, 'to_email': user.email,
                'email_subject': 'Подтверждение почты'}

        Util.send_email(data=data)

        return Response(
            data={"Success": "Проверьте почту для подтверждения регистрации."},
            status=status.HTTP_201_CREATED
        )


@extend_schema_view(
    get=extend_schema(
        description="Подтверждение почты.",
        tags=["Авторизация"],
        summary="Подтверждение почты.",
    ),
)
class EmailConfirmation(APIView):
    permission_classes = (AllowAny,)

    @staticmethod
    def get(request, *args, **kwargs):
        user_id = kwargs.get("user_id")
        confirmation_token = kwargs.get("confirmation_token")

        if not user_id:
            raise ValidationError(
                detail="Вы неверно указали пользователя для подтверждения email.",
                code=status.HTTP_403_FORBIDDEN,
            )

        if not confirmation_token:
            raise ValidationError(
                detail="Вы неверно указали токен для подтверждения email.",
                code=status.HTTP_403_FORBIDDEN,
            )

        user = models.Account.objects.filter(pk=user_id).first()

        if user.is_active:
            raise ValidationError("Пользователь уже подтвердил свою почту.", code=status.HTTP_400_BAD_REQUEST)

        if not user:
            raise ValidationError("Такого пользователя не существует", code=status.HTTP_400_BAD_REQUEST)

        if not default_token_generator.check_token(user, confirmation_token):
            raise ValidationError(
                "Токен просрочен. Пожайлуста, переотправьте подтверждение для почты.",
                code=status.HTTP_400_BAD_REQUEST
            )

        user.is_active = True
        user.save()

        return Response(data={"successMessage": "Ваш email подтверждён успешно."}, status=status.HTTP_200_OK)


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех пользователей.",
        tags=["Пользователи"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о пользователе по ID.",
        tags=["Пользователи"],
    ),
    create=extend_schema(
        summary="Добавить нового пользователя.",
        tags=["Пользователи"],
    ),
    update=extend_schema(
        summary="Обновить информацию о пользователе по ID.",
        tags=["Пользователи"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о пользователе по ID.",
        tags=["Пользователи"],
    ),
    destroy=extend_schema(
        summary="Удалить пользователя по ID.",
        tags=["Пользователи"],
    ),
)
# endregion
class AccountViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, AccessRoleScopePermission, CustomDjangoModelPermission,)
    queryset = models.Account.objects.all()
    serializer_class = auth_serializers.AccountSerializer
    filter_backends = [
        RoleBasedAccountFilter,
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        is_superuser = data.get("is_superuser")

        if not request.user.is_super_admin:
            if instance.is_super_admin:
                raise ValidationError("Вы не можете изменять супер-админа.")

            if is_superuser is not None and is_superuser != instance.is_superuser:
                raise ValidationError("Вы не можете сделать супер-админа.")

        return super().partial_update(request, *args, **kwargs)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data

        if not request.user.is_superuser:
            if instance.is_superuser:
                raise ValidationError("Вы не можете изменять супер-админа.")

            if data.get("is_superuser", False) != instance.is_superuser:
                raise ValidationError("Вы не можете сделать супер-админа.")

        return super().update(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        data = request.data

        if data.get("is_superuser"):
            raise ValidationError("Вы не можете создать супер-админа.")

        return super().create(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()

        if instance.is_superuser:
            raise ValidationError("Супер-админ не может быть удалён из системы.")

        return super().destroy(request, *args, **kwargs)


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех врачей.",
        tags=["Врачи"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о враче по ID.",
        tags=["Врачи"],
    ),
    create=extend_schema(
        summary="Добавить нового врача.",
        tags=["Врачи"],
    ),
    update=extend_schema(
        summary="Обновить информацию о враче по ID.",
        tags=["Врачи"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о враче по ID.",
        tags=["Врачи"],
    ),
    destroy=extend_schema(
        summary="Удалить врача по ID.",
        tags=["Врачи"],
    ),
)
# endregion
class DoctorViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Doctor.objects.all()
    serializer_class = auth_serializers.DoctorSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех вопросов.",
        tags=["Вопросы"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о вопросе по ID.",
        tags=["Вопросы"],
    ),
    create=extend_schema(
        summary="Добавить новый вопрос.",
        tags=["Вопросы"],
    ),
    update=extend_schema(
        summary="Обновить информацию о вопросе по ID.",
        tags=["Вопросы"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о вопросе по ID.",
        tags=["Вопросы"],
    ),
    destroy=extend_schema(
        summary="Удалить вопрос по ID.",
        tags=["Вопросы"],
    ),
)
# endregion
class QuestionViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Question.objects.all()
    serializer_class = auth_serializers.QuestionSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить расписание работы врачей.",
        tags=["Расписание"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о расписании по ID.",
        tags=["Расписание"],
    ),
    create=extend_schema(
        summary="Добавить новое расписание.",
        tags=["Расписание"],
    ),
    update=extend_schema(
        summary="Обновить информацию о расписании по ID.",
        tags=["Расписание"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о расписании по ID.",
        tags=["Расписание"],
    ),
    destroy=extend_schema(
        summary="Удалить расписание по ID.",
        tags=["Расписание"],
    ),
)
# endregion
class ScheduleViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Schedule.objects.all()
    serializer_class = auth_serializers.ScheduleSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список стоимости всех услуг.",
        tags=["Услуги"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию об услуге по ID.",
        tags=["Услуги"],
    ),
    create=extend_schema(
        summary="Добавить новую услугу.",
        tags=["Услуги"],
    ),
    update=extend_schema(
        summary="Обновить информацию об услуге по ID.",
        tags=["Услуги"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию об услуге по ID.",
        tags=["Услуги"],
    ),
    destroy=extend_schema(
        summary="Удалить услугу по ID.",
        tags=["Услуги"],
    ),
)
# endregion
class PriceViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Price.objects.all()
    serializer_class = auth_serializers.PriceSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить контактные данные клиники.",
        tags=["Контакты"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о контакте клиники по ID.",
        tags=["Контакты"],
    ),
    create=extend_schema(
        summary="Добавить контактные данные клиники.",
        tags=["Контакты"],
    ),
    update=extend_schema(
        summary="Обновить информацию о контактах клиники по ID.",
        tags=["Контакты"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о контактах клиники по ID.",
        tags=["Контакты"],
    ),
    destroy=extend_schema(
        summary="Удалить контакты клиники по ID.",
        tags=["Контакты"],
    ),
)
# endregion
class ContactViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Contact.objects.all()
    serializer_class = auth_serializers.ContactSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех записей на прием.",
        tags=["Записи на прием"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о записи на прием по ID.",
        tags=["Записи на прием"],
    ),
    create=extend_schema(
        summary="Создать новую запись на прием.",
        tags=["Записи на прием"],
    ),
    update=extend_schema(
        summary="Обновить информацию о записи на прием по ID.",
        tags=["Записи на прием"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о записи на прием по ID.",
        tags=["Записи на прием"],
    ),
    destroy=extend_schema(
        summary="Удалить запись на прием по ID.",
        tags=["Записи на прием"],
    ),
)
# endregion
class AppointmentViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission, AppointmentPermission, )
    queryset = models.Appointment.objects.all()
    serializer_class = auth_serializers.AppointmentSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]

    def get_queryset(self):
        queryset_ = self.queryset
        user = self.request.user

        if user.is_user:
            queryset_ = queryset_.filter(patient=user)

        return queryset_


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех кейсов.",
        tags=["Кейсы"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о кейсе по ID.",
        tags=["Кейсы"],
    ),
    create=extend_schema(
        summary="Добавить новый кейс.",
        tags=["Кейсы"],
    ),
    update=extend_schema(
        summary="Обновить информацию о кейсе по ID.",
        tags=["Кейсы"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о кейсе по ID.",
        tags=["Кейсы"],
    ),
    destroy=extend_schema(
        summary="Удалить кейс по ID.",
        tags=["Кейсы"],
    ),
)
# endregion
class CaseViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Case.objects.all()
    serializer_class = auth_serializers.CaseSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех специальностей.",
        tags=["Специальности"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о специальности по ID.",
        tags=["Специальности"],
    ),
    create=extend_schema(
        summary="Добавить новую специальность.",
        tags=["Специальности"],
    ),
    update=extend_schema(
        summary="Обновить информацию о специальности по ID.",
        tags=["Специальности"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о специальности по ID.",
        tags=["Специальности"],
    ),
    destroy=extend_schema(
        summary="Удалить специальность по ID.",
        tags=["Специальности"],
    ),
)
# endregion
class SpecialtyViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Specialty.objects.all()
    serializer_class = auth_serializers.SpecialtySerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех профилей лечения.",
        tags=["Профили лечения"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о профиле лечения по ID.",
        tags=["Профили лечения"],
    ),
    create=extend_schema(
        summary="Добавить новый профиль лечения.",
        tags=["Профили лечения"],
    ),
    update=extend_schema(
        summary="Обновить информацию о профиле лечения по ID.",
        tags=["Профили лечения"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о профиле лечения по ID.",
        tags=["Профили лечения"],
    ),
    destroy=extend_schema(
        summary="Удалить профиль лечения по ID.",
        tags=["Профили лечения"],
    ),
)
# endregion
class TreatmentProfileViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.TreatmentProfile.objects.all()
    serializer_class = auth_serializers.TreatmentProfileSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех образований.",
        tags=["Образование"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию об образовании по ID.",
        tags=["Образование"],
    ),
    create=extend_schema(
        summary="Добавить новое образование.",
        tags=["Образование"],
    ),
    update=extend_schema(
        summary="Обновить информацию об образовании по ID.",
        tags=["Образование"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию об образовании по ID.",
        tags=["Образование"],
    ),
    destroy=extend_schema(
        summary="Удалить образование по ID.",
        tags=["Образование"],
    ),
)
# endregion
class EducationViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Education.objects.all()
    serializer_class = auth_serializers.EducationSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех дополнительных курсов.",
        tags=["Доп. обучение"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию об дополнительном обучении по ID.",
        tags=["Доп. обучение"],
    ),
    create=extend_schema(
        summary="Добавить новое дополнительное обучение.",
        tags=["Доп. обучение"],
    ),
    update=extend_schema(
        summary="Обновить информацию об дополнительном обучении по ID.",
        tags=["Доп. обучение"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию об дополнительном обучении по ID.",
        tags=["Доп. обучение"],
    ),
    destroy=extend_schema(
        summary="Удалить дополнительное обучение по ID.",
        tags=["Доп. обучение"],
    ),
)
# endregion
class AdvancedTrainingViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.AdvancedTraining.objects.all()
    serializer_class = auth_serializers.AdvancedTrainingSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех изображений.",
        tags=["Изображения для кейсов"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию об изображении по ID.",
        tags=["Изображения для кейсов"],
    ),
    create=extend_schema(
        summary="Добавить новое изображение.",
        tags=["Изображения для кейсов"],
    ),
    update=extend_schema(
        summary="Обновить информацию об изображении по ID.",
        tags=["Изображения для кейсов"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию об изображении по ID.",
        tags=["Изображения для кейсов"],
    ),
    destroy=extend_schema(
        summary="Удалить изображение по ID.",
        tags=["Изображения для кейсов"],
    ),
)
# endregion
class ImageViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Image.objects.all()
    serializer_class = auth_serializers.ImageSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех результатов.",
        tags=["Результаты"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию о результате по ID.",
        tags=["Результаты"],
    ),
    create=extend_schema(
        summary="Добавить новый результат.",
        tags=["Результаты"],
    ),
    update=extend_schema(
        summary="Обновить информацию о результате по ID.",
        tags=["Результаты"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию о результате по ID.",
        tags=["Результаты"],
    ),
    destroy=extend_schema(
        summary="Удалить результат по ID.",
        tags=["Результаты"],
    ),
)
# endregion
class ResultViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Result.objects.all()
    serializer_class = auth_serializers.ResultSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


# region
@extend_schema_view(
    list=extend_schema(
        summary="Получить список всех акций.",
        tags=["Акции"],
    ),
    retrieve=extend_schema(
        summary="Получить информацию об акции по ID.",
        tags=["Акции"],
    ),
    create=extend_schema(
        summary="Добавить новую акцию.",
        tags=["Акции"],
    ),
    update=extend_schema(
        summary="Обновить информацию об акции по ID.",
        tags=["Акции"],
    ),
    partial_update=extend_schema(
        summary="Частичное обновить информацию об акции по ID.",
        tags=["Акции"],
    ),
    destroy=extend_schema(
        summary="Удалить акцию по ID.",
        tags=["Акции"],
    ),
)
# endregion
class PromotionViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, CustomDjangoModelPermission,)
    queryset = models.Promotion.objects.all()
    serializer_class = auth_serializers.PromotionSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
