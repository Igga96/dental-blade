
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters, status, viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import AllowAny, IsAuthenticated
from drf_spectacular.utils import OpenApiResponse, extend_schema, extend_schema_view, inline_serializer

from dental_source import serializers as auth_serializers
from dental_source import models


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
    permission_classes = (AllowAny,)
    queryset = models.Account.objects.all()
    serializer_class = auth_serializers.AccountSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
    search_fields = ["login"]


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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
    queryset = models.Appointment.objects.all()
    serializer_class = auth_serializers.AppointmentSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]


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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
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
    permission_classes = (AllowAny,)
    queryset = models.Promotion.objects.all()
    serializer_class = auth_serializers.PromotionSerializer
    filter_backends = [
        DjangoFilterBackend,
        filters.OrderingFilter,
        filters.SearchFilter,
    ]
