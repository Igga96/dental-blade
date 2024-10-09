import uuid

from django.db import models

from django.core.mail import send_mail


class LowercaseEmailField(models.EmailField):
    """
    Override EmailField to convert emails to lowercase before saving.
    """

    def to_python(self, value):
        """
        Convert email to lowercase.
        """
        value = super().to_python(value)
        # Value can be None so check that it's a string before lowercasing.
        if isinstance(value, str):
            return value.lower()

        return value


def generate_uuid() -> str:
    return uuid.uuid4().hex


def is_superuser(user):
    return user.is_superuser


class Util:
    @staticmethod
    def send_email(data):
        send_mail(
            data['email_subject'],
            data['email_body'],
            "test@gmail.com",
            [data['to_email']],
            fail_silently=False,
        )
