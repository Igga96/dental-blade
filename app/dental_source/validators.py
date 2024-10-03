import re

from rest_framework.serializers import ValidationError


class PasswordValidator:
    @staticmethod
    def validate(password: str, user=None) -> None:
        if password.isdigit():
            raise ValidationError("Пароль не может состоять только из цифр.", code="password_insecure")

        if len(password) < 8:
            raise ValidationError("Длина пароля должна быть не меньше 8 символов.", code="password_insecure")

        if not re.findall(r"\d", password):
            raise ValidationError("Пароль должен содержать хотя бы одну цифру.", code="password_insecure")

        if not re.findall("[A-Z]", password):
            raise ValidationError(
                "Пароль должен содержать хотя бы одну букву латиницы в верхнем регистре.",
                code="password_insecure"
            )

        if not re.findall("[a-z]", password):
            raise ValidationError(
                "Пароль должен содержать хотя бы одну букву латиницы в нижнем регистре.",
                code="password_insecure"
            )

        if not re.findall(r"[()[\]{z}|\\`~!@#$%^&*_\-+=;:'\",<>./?]", password):
            raise ValidationError("Пароль должен содержать хотя бы один символ.", code="password_insecure")


def validate_login(login: str) -> None:
    if re.match(r"^\d+$", login):
        raise ValidationError("Логин не может состоять только из цифр.")
    if not re.match(r"^[a-zA-Z0-9_.@-]+$", login):
        raise ValidationError("Логин может содержать только символы латинского алфавита, цифры, '-', '.', '@' и '_'.")
    if re.match(r"^\s|\s$", login):
        raise ValidationError("Логин не должно начинаться или заканчиваться пробелом.")
    if not any(char.isalpha() for char in login):
        raise ValidationError("Логин должно содержать хотя бы одну букву.")
    if " " in login:
        raise ValidationError("В логине не допускается наличие пробелов.")
    if len(login) < 5:
        raise ValidationError("Логин должно содержать не менее 5 символов.")
    if len(login) > 30:
        raise ValidationError("Логин должно содержать не более 30 символов.")


def validate_name(value) -> None:
    if value:
        if value == "-":
            raise ValidationError("Имя, фамилия, отчество не могут состоять только из знака дефиса.")
        if value.count("-") > 1:
            raise ValidationError("Имя, фамилия, отчество должны содержать не более одного знака дефиса.")
        if not re.match(r"^[а-яА-ЯЁё\-]+ ?[а-яА-ЯЁё\-]*$", value):
            raise ValidationError(
                "Имя, фамилия, отчество должны содержать только буквы кириллицы, знак дефиса, знак пробела."
            )


def validate_phone(value: str) -> None:
    if value.startswith("-"):
        raise ValidationError("Уважаемый пользователь, телефон не может начинаться со знака -")

    if not value:
        raise ValidationError("Уважаемый пользователь, укажите, пожайлуста, телефон.")

    if len(value) > 13 or not re.match(r"^(?:\+|\d)[\d\-\(\)]{9,}\d", value):
        raise ValidationError(
            "Уважаемый пользователь, укажите телефон правильно: до 12 цифр без пробелов; допускается "
            "символ + вначале строки."
        )
