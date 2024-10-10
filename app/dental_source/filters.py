from django.db.models import Q
from rest_framework.filters import BaseFilterBackend

from dental_source.constants import AccountRole


class RoleBasedAccountFilter(BaseFilterBackend):
    """
    Filter Accounts based on the access roles + its own account.
    """

    def filter_queryset(self, request, queryset, view):
        queryset_ = queryset
        user = request.user

        # Filter only for list action, skip filtering for patch, retrieve, etc.
        if request.method == "GET" and user and "pk" not in request.parser_context.get("kwargs"):
            if request.user.is_superuser:
                return queryset_
            elif request.user.is_admin:
                return queryset_.filter(
                    Q(pk=user.pk) | Q(groups__name__in=[AccountRole.USER.value])
                )
            elif request.user.is_user:
                return queryset_.filter(pk=user.pk)

        return queryset_
