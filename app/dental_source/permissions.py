from rest_framework.permissions import BasePermission

from rest_framework import permissions


class CustomDjangoModelPermission(permissions.DjangoModelPermissions):
    perms_map = {
        "GET": ["%(app_label)s.view_%(model_name)s"],
        "OPTIONS": ["%(app_label)s.view_%(model_name)s"],
        "HEAD": ["%(app_label)s.view_%(model_name)s"],
        "POST": ["%(app_label)s.add_%(model_name)s"],
        "PUT": ["%(app_label)s.change_%(model_name)s"],
        "PATCH": ["%(app_label)s.change_%(model_name)s"],
        "DELETE": ["%(app_label)s.delete_%(model_name)s"],
    }


class AccessRoleScopePermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        accessed_role = obj
        logged_user = request.user

        if logged_user.is_super_admin:
            return True
        elif logged_user.is_admin:
            if accessed_role.is_super_admin:
                return False
            if accessed_role.is_admin:
                return True if logged_user == obj else False
            if accessed_role.is_user:
                return True
        elif logged_user.is_user:
            if accessed_role.is_super_admin:
                return False
            if accessed_role.is_admin:
                return False
            if accessed_role.is_user:
                return True if logged_user == obj else False
        else:
            return False


class AppointmentPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        logged_user = request.user

        if logged_user.is_user:
            return True if logged_user == obj.patient else False

        return True
