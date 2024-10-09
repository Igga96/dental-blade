from django.contrib.auth.models import AbstractUser, Group
from django.db import models
from django.utils.text import slugify
from rest_framework_simplejwt.tokens import RefreshToken

from dental_source.constants import AccountRole
from dental_source.managers import AccountManager
from dental_source.utils import generate_uuid, LowercaseEmailField
from dental_source.validators import validate_login, validate_name, validate_phone, validate_percent

from storages.backends.ftp import FTPStorage
from django.conf import settings

fs = FTPStorage(location=settings.FTP_STORAGE_LOCATION)


class Account(AbstractUser):
    USERNAME_FIELD = "login"
    REQUIRED_FIELDS = []
    username = None

    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID аккаунта"
    )
    first_name = models.CharField(max_length=50, verbose_name="Имя", help_text="Имя", validators=[validate_name])
    last_name = models.CharField(max_length=50, verbose_name="Фамилия", help_text="Фамилия", validators=[validate_name])
    middleName = models.CharField(
        verbose_name="Отчество",
        help_text="Отчество",
        max_length=50,
        blank=True,
        null=True,
        validators=[validate_name]
    )
    login = models.CharField(
        verbose_name="Логин",
        max_length=30,
        db_index=True,
        unique=True,
        error_messages={"unique": "Значение логина должно быть уникальным."},
        validators=[validate_login]
    )
    email = LowercaseEmailField(
        verbose_name="Email",
        unique=True,
        error_messages={"unique": "Значение почты должно быть уникальным."},
    )
    phone = models.CharField(
        max_length=13,
        null=True,
        blank=True,
        verbose_name="Телефон",
        validators=[validate_phone]
    )
    image_path = models.ImageField(
        storage=fs,
        upload_to="media/accounts/",
        help_text="Изображение",
        verbose_name="Изображение",
        blank=True,
        null=True
    )
    role = models.ForeignKey(
        to=Group,
        on_delete=models.PROTECT,
        verbose_name="Роль",
        default=Group.objects.get(name=AccountRole.USER.value).id
    )

    objects = AccountManager()

    @property
    def is_super_admin(self) -> bool:
        return self.role.name == AccountRole.SUPER_ADMIN.value

    @property
    def is_admin(self) -> bool:
        return self.role.name == AccountRole.ADMIN.value

    @property
    def is_user(self) -> bool:
        return self.role.name == AccountRole.USER.value

    @property
    def access_token(self) -> str:
        return str(RefreshToken.for_user(self).access_token)

    @property
    def refresh_token(self) -> str:
        return str(RefreshToken.for_user(self))

    def __str__(self):
        return self.login

    def __repr__(self):
        return f"{self.__class__.__name__} (ID: {self.pk})"

    class Meta:
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"
        ordering = ("login",)


class Doctor(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID доктора"
    )
    firstName = models.CharField(max_length=50, verbose_name="Имя", help_text="Имя", validators=[validate_name])
    lastName = models.CharField(max_length=50, verbose_name="Фамилия", help_text="Фамилия", validators=[validate_name])
    middleName = models.CharField(
        verbose_name="Отчество",
        help_text="Отчество",
        max_length=50,
        blank=True,
        null=True,
        validators=[validate_name]
    )
    category = models.CharField(
        max_length=40,
        verbose_name="Категория",
        help_text="Категория"
    )
    experienceYears = models.IntegerField(
        verbose_name="Лет опыта",
        help_text="Лет опыта",
        validators=[validate_percent]
    )
    specialty = models.ManyToManyField(
        verbose_name="Специальности",
        help_text="Специальности",
        to="Specialty",
        related_name="specialties",
        blank=True
    )
    treatmentProfile = models.ManyToManyField(
        verbose_name="Профили лечения",
        help_text="Профили лечения",
        to="TreatmentProfile",
        related_name="treatmentProfiles",
        blank=True
    )
    education = models.ManyToManyField(
        verbose_name="Образования",
        help_text="Образования",
        to="Education",
        related_name="educations",
        blank=True
    )
    advancedTraining = models.ManyToManyField(
        verbose_name="Доп. обучения",
        help_text="Доп. обучения",
        to="AdvancedTraining",
        related_name="advancedTrainings",
        blank=True
    )
    rating = models.CharField(
        max_length=5,
        verbose_name="Рейтинг",
        help_text="Рейтинг"
    )
    imgPath = models.ImageField(
        storage=fs,
        upload_to="media/doctors/",
        help_text="Изображение",
        verbose_name="Изображение",
        blank=True,
        null=True
    )
    price = models.ManyToManyField(
        verbose_name="Перечень услуг оказываемые доктором",
        help_text="Перечень услуг оказываемые доктором",
        to="Price",
        related_name="doctor_prices",
    )
    slug = models.SlugField()

    def save(self, *args, **kwargs):
        fio = self.lastName + " " + self.firstName + " " + self.middleName
        result = fio.translate(str.maketrans(
            "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ",
            "abvgdeejzijklmnoprstufhzcss_y_euaABVGDEEJZIJKLMNOPRSTUFHZCSS_Y_EUA"
        ))

        self.slug = slugify(result)
        super(Doctor, self).save(*args, **kwargs)


    class Meta:
        verbose_name = "Доктора"
        verbose_name_plural = "Доктор"


class Question(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID вопроса"
    )
    question = models.TextField(
        verbose_name="Вопрос",
        help_text="Вопрос"
    )
    answer = models.TextField(
        verbose_name="Имя",
        help_text="Имя"
    )
    slug = models.TextField(
        blank=True,
        null=True
    )

    class Meta:
        verbose_name = "Вопросы"
        verbose_name_plural = "Вопрос"


class Schedule(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID расписания"
    )
    doctor = models.ForeignKey(
        verbose_name="Доктор",
        help_text="Доктор",
        to=Doctor,
        on_delete=models.CASCADE,
    )
    workStart = models.TimeField(
        verbose_name="Время начала работы",
        help_text="Время начала работы"
    )
    workEnd = models.TimeField(
        verbose_name="Время конца работы",
        help_text="Время конца работы"
    )

    class Meta:
        verbose_name = "Расписания"
        verbose_name_plural = "Расписание"


class Price(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID услуги"
    )
    category = models.CharField(
        max_length=40,
        verbose_name="Категория",
        help_text="Категория"
    )
    name = models.CharField(
        max_length=40,
        verbose_name="Название",
        help_text="Название"
    )
    price = models.IntegerField(
        verbose_name="Цена",
        help_text="Цена"
    )
    lengthInMinutes = models.IntegerField(
        verbose_name="Длина в минутах",
        help_text="Длина в минутах",
        default=60
    )

    class Meta:
        verbose_name = "Услуги"
        verbose_name_plural = "Услуга"


class Contact(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID контакта"
    )
    clinicId = models.CharField(
        max_length=40,
        verbose_name="GUID клиники",
        blank=True,
        null=True
    )
    name = models.CharField(
        max_length=40,
        verbose_name="Название",
        help_text="Название"
    )
    address = models.TextField(
        verbose_name="Адрес",
        help_text="Адрес"
    )
    phone = models.CharField(
        verbose_name="Телефон",
        max_length=13,
        null=True,
        blank=True,
        validators=[validate_phone]
    )
    timeStart = models.TimeField(
        verbose_name="Время начала работы",
        help_text="Время начала работы"
    )
    timeEnd = models.TimeField(
        verbose_name="Время конца работы",
        help_text="Время конца работы"
    )
    email = LowercaseEmailField(
        verbose_name="Почта",
        error_messages={"unique": "Значение почты должно быть уникальным."},
    )
    wsLink = models.CharField(
        verbose_name="Ссылка на ws",
        help_text="Ссылка на ws",
        max_length=128,
        blank=True
    )
    vkLink = models.CharField(
        verbose_name="Ссылка на vk",
        help_text="Ссылка на vk",
        max_length=128,
        blank=True
    )
    tgLink = models.CharField(
        verbose_name="Ссылка на tg",
        help_text="Ссылка на tg",
        max_length=128,
        blank=True
    )
    fbLink = models.CharField(
        verbose_name="Ссылка на fb",
        help_text="Ссылка на fb",
        max_length=128,
        blank=True
    )

    class Meta:
        verbose_name = "Контакты"
        verbose_name_plural = "Контакт"


class Appointment(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID встречи"
    )
    doctor = models.ForeignKey(
        verbose_name="Доктор",
        help_text="Доктор",
        to=Doctor,
        on_delete=models.CASCADE,
    )
    appointmentСreation = models.DateTimeField(
        auto_now_add=True,
        editable=False,
        verbose_name="Адрес",
        help_text="Адрес"
    )
    appointmentDate = models.DateField(
        verbose_name="Дата встречи",
        help_text="Дата встречи"
    )
    appointmentTime = models.TimeField(
        verbose_name="Время встречи",
        help_text="Время встречи"
    )
    lengthInMinutes = models.IntegerField(
        verbose_name="Длина встречи в минутах",
        help_text="Длина встречи в минутах"
    )
    phone = models.CharField(
        verbose_name="Телефон",
        max_length=13,
        null=True,
        blank=True,
        validators=[validate_phone]
    )
    patient = models.ForeignKey(
        to=Account,
        on_delete=models.CASCADE,
        verbose_name="Пациент",
        help_text="Пациент",
        null=True,
        blank=True,
    )
    serviceType = models.TextField(
        verbose_name="Услуга",
        help_text="Услуга",
    )

    class Meta:
        verbose_name = "Встречи"
        verbose_name_plural = "Встреча"


class Case(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID случая"
    )
    name = models.TextField(
        verbose_name="Название",
        help_text="Название"
    )
    images = models.ManyToManyField(
        verbose_name="Изображения",
        help_text="Изображения",
        to="Image",
        related_name="images",
    )
    introduction = models.TextField(
        verbose_name="Первичный осмотри",
        help_text="Первичный осмотри",
        null=True,
        blank=True,
    )
    diagnos = models.TextField(
        verbose_name="Диагноз",
        help_text="Диагноз",
        null=True,
        blank=True,
    )
    treatment = models.TextField(
        verbose_name="Лечение",
        help_text="Лечение",
        null=True,
        blank=True,
    )
    category = models.CharField(
        max_length=40,
        verbose_name="Категория",
        help_text="Категория"
    )
    totalCost = models.IntegerField(
        verbose_name="Полная стоимость",
        help_text="Полная стоимость"
    )
    price = models.ManyToManyField(
        verbose_name="Перечень услуг с ценами",
        help_text="Перечень услуг с ценами",
        to="Price",
        related_name="prices",
    )
    doctor = models.ForeignKey(
        verbose_name="Доктор",
        help_text="Доктор",
        to=Doctor,
        on_delete=models.CASCADE,
    )
    slug = models.TextField()

    class Meta:
        verbose_name = "Случаи"
        verbose_name_plural = "Случай"


class Specialty(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID специальности"
    )
    name = models.TextField(
        verbose_name="Название",
        help_text="Название"
    )

    class Meta:
        verbose_name = "Специальности"
        verbose_name_plural = "Специальность"


class TreatmentProfile(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID профиля лечения"
    )
    name = models.TextField(
        verbose_name="Название профиля",
        help_text="Название профиля"
    )
    percent = models.IntegerField(
        verbose_name="Процент",
        help_text="Процент",
        validators=[validate_percent]
    )

    class Meta:
        verbose_name = "Профили лечения"
        verbose_name_plural = "Профиль лечения"


class Education(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID образования"
    )
    name = models.TextField(
        verbose_name="Название",
        help_text="Название"
    )
    edStart = models.CharField(
        max_length=25,
        verbose_name="Год начала",
        help_text="Год начала"
    )
    edEnd = models.CharField(
        max_length=25,
        verbose_name="Год конца",
        help_text="Год конца"
    )

    class Meta:
        verbose_name = "Образования"
        verbose_name_plural = "Образование"


class AdvancedTraining(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID доп. обучения"
    )
    name = models.TextField(
        verbose_name="Название доп. обучения",
        help_text="Название доп. обучения"
    )
    year = models.CharField(
        max_length=25,
        verbose_name="Год обучения",
        help_text="Год обучения",
    )

    class Meta:
        verbose_name = "Дополнительные курсы"
        verbose_name_plural = "Дополнительное обучение"


class Image(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID изображения"
    )
    path = models.ImageField(
        storage=fs,
        upload_to="media/images/",
        help_text="Изображение",
        verbose_name="Изображение",
    )
    isTitle = models.BooleanField(
        verbose_name="Титульное изображение",
        help_text="Титульное изображение"
    )

    class Meta:
        verbose_name = "Изображения"
        verbose_name_plural = "Изображения"


class Result(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID результата"
    )
    imageBefore = models.ImageField(
        storage=fs,
        upload_to="media/results/",
        help_text="Изображение до",
        verbose_name="Изображение до",
    )
    imageAfter = models.ImageField(
        storage=fs,
        upload_to="media/results/",
        help_text="Изображение после",
        verbose_name="Изображение после",
    )
    slug = models.TextField(
        verbose_name="Ссылка на страницу",
        help_text="Ссылка на страницу на которой будет отображаться"
    )

    class Meta:
        verbose_name = "Результаты"
        verbose_name_plural = "Результат"


class Promotion(models.Model):
    id = models.CharField(
        default=generate_uuid, primary_key=True, editable=False, max_length=40, verbose_name="GUID акции"
    )
    price = models.ForeignKey(
        verbose_name="Услуга",
        help_text="Услуга",
        to=Price,
        on_delete=models.CASCADE,
    )
    discount = models.IntegerField(
        verbose_name="Скидка",
        help_text="Скидка",
        blank=True,
        null=True,
        validators=[validate_percent]
    )
    slug = models.TextField(
        verbose_name="Ссылка на страницу",
        help_text="Ссылка на страницу на которой будет отображаться акция"
    )
    oldPrice = models.IntegerField(
        verbose_name="Старая цена",
        help_text="Старая цена",
    )
    newPrice = models.IntegerField(
        verbose_name="Новая цена",
        help_text="Новая цена",
    )

    class Meta:
        verbose_name = "Акции"
        verbose_name_plural = "Акция"
