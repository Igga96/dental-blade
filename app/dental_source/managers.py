
from django.contrib.auth.base_user import BaseUserManager
from rest_framework.exceptions import ValidationError


class AccountManager(BaseUserManager):
    def create_user(self, login, password=None, **extra_fields):
        if not login:
            raise ValidationError({"errorMessage": "Введите логин"})

        user = self.model(login=login, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, login, password):
        user = self.create_user(login, password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user