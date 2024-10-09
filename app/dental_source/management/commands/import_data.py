import os

from django.contrib.auth.models import Group, Permission
from django.contrib.contenttypes.models import ContentType
from django.core import management
from django.core.management import BaseCommand

from eform.settings import BASE_DIR, DATABASES


class Command(BaseCommand):
    help = "Import initial data"

    def add_arguments(self, parser):
        parser.add_argument("--profile", required=True, type=str)

    def handle(self, *args, **options):
        DATABASES["target"] = {
            "NAME": os.environ.get("DB_NAME"),
            "USER": os.environ.get("DB_USER"),
            "PASSWORD": os.environ.get("DB_PASSWORD"),
            "HOST": os.environ.get("DB_HOST"),
            "PORT": os.environ.get("DB_PORT"),
            "ENGINE": os.environ.get("DB_ENGINE", "django.db.backends.postgresql"),
            "OPTIONS": {"options": "-c search_path=django,public"},
            "TIME_ZONE": "Europe/Minsk",
            "CONN_HEALTH_CHECKS": 1,
            "CONN_MAX_AGE": 100000,
            "AUTOCOMMIT": True,
        }

        ContentType.objects.using("target").all().delete()
        Group.objects.using("target").all().delete()
        Permission.objects.using("target").all().delete()

        self.load_base_profile()


    @staticmethod
    def load_base_profile():
        management.call_command("loaddata", "base/data/content_type", database="target")
        management.call_command("loaddata", "base/data/permissions", database="target")
        management.call_command("loaddata", "base/data/group", database="target")
        management.call_command("loaddata", "base/data/group_permissions", database="target")
