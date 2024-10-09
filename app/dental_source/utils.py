import os
import uuid

from django.db import models

from django.core.mail import send_mail
from django.template import Template


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


class Util:
    @staticmethod
    def send_email(data):
        send_mail(
            subject=data['email_subject'],
            from_email=os.environ.get("SMTP_FROM_EMAIL", "test@gmail.com"),
            recipient_list=[data['to_email']],
            fail_silently=True,
            html_message=Template(data['email_body']),
        )
