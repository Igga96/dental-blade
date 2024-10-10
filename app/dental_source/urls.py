from django.urls import include, path
from rest_framework.routers import DefaultRouter

from dental_source import views

router = DefaultRouter(trailing_slash=False)

router.register(r"users", views.AccountViewSet, basename="api-accounts")
router.register(r"doctors", views.DoctorViewSet, basename="api-doctors")
router.register(r"questions", views.QuestionViewSet, basename="api-questions")
router.register(r"schedules", views.ScheduleViewSet, basename="api-schedules")
router.register(r"prices", views.PriceViewSet, basename="api-prices")
router.register(r"contacts", views.ContactViewSet, basename="api-contacts")
router.register(r"appointments", views.AppointmentViewSet, basename="api-appointments")
router.register(r"cases", views.CaseViewSet, basename="api-cases")
router.register(r"specialties", views.SpecialtyViewSet, basename="api-specialties")
router.register(r"treatmentProfiles", views.TreatmentProfileViewSet, basename="api-treatmentProfiles")
router.register(r"educations", views.EducationViewSet, basename="api-educations")
router.register(r"advancedTrainings", views.AdvancedTrainingViewSet, basename="api-advancedTrainings")
router.register(r"images", views.ImageViewSet, basename="api-images")
router.register(r"results", views.ResultViewSet, basename="api-results")
router.register(r"promotions", views.PromotionViewSet, basename="api-promotions")

urlpatterns = [
    path("registration/", views.Registration.as_view()),
    path("login/", views.Login.as_view()),
    path("logout/", views.Logout.as_view()),
    path(
        "confirm-email/<str:user_id>/<str:confirmation_token>", views.EmailConfirmation.as_view(), name="confirm_email"
    ),
    path("", include(router.urls)),
]
