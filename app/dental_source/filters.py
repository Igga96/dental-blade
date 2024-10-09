from django.db.models import Q
from rest_framework.filters import BaseFilterBackend

# from dental_source.models import Account, Identifier, Person, RequestNote
#
#
# class RoleBasedAccountFilter(BaseFilterBackend):
#     """
#     Filter Accounts based on the access roles + its own account.
#     """
#
#     def filter_queryset(self, request, queryset, view):
#         queryset_ = queryset
#         user = Account.objects.get_session_user(request)
#
#         # Filter only for list action, skip filtering for patch, retrieve, etc.
#         if request.method == "GET" and user and "pk" not in request.parser_context.get("kwargs"):
#             queryset_ = queryset_.filter(role__in=user.role.get_through_access_roles()).exclude(login=user.login)
#
#             department = user.department
#             if user.has_perm("authentication.account_constraint"):
#                 queryset_ = queryset_.filter(department=department)
#             elif user.has_perm("authentication.account_org_constraint"):
#                 queryset_ = queryset_.filter(department__parent_organisation_id=department.parent_organisation_id)
#             else:
#                 mns_org = department.parent_organisation
#                 if mns_org and mns_org.is_mns:
#                     queryset_ = queryset_.filter(
#                         Q(pk=user.pk)
#                         | Q(department__parent_organisation__parent_organisation=mns_org)
#                         | Q(department=department)
#                     ).exclude(
#                         Q(department__parent_organisation__parent_organisation=mns_org)
#                         & Q(role__name=AccountRole.USER_MNS.value)
#                     )
#         return queryset_