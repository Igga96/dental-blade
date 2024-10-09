from django.contrib import admin

from dental_source import models


@admin.register(models.Account)
class AccountAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Account._meta.fields]
    search_fields = [field.name for field in models.Account._meta.fields]

    def save_model(self, request, obj, form, change):
        if "argon2" not in obj.password:
            obj.set_password(obj.password)

        obj.save()


@admin.register(models.Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Doctor._meta.fields]
    search_fields = [field.name for field in models.Doctor._meta.fields]


@admin.register(models.Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Question._meta.fields]
    search_fields = [field.name for field in models.Question._meta.fields]


@admin.register(models.Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Schedule._meta.fields]
    search_fields = [field.name for field in models.Schedule._meta.fields]


@admin.register(models.Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Price._meta.fields]
    search_fields = [field.name for field in models.Price._meta.fields]


@admin.register(models.Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Contact._meta.fields]
    search_fields = [field.name for field in models.Contact._meta.fields]


@admin.register(models.Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Appointment._meta.fields]
    search_fields = [field.name for field in models.Appointment._meta.fields]


@admin.register(models.Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Case._meta.fields]
    search_fields = [field.name for field in models.Case._meta.fields]


@admin.register(models.Specialty)
class SpecialtyAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Specialty._meta.fields]
    search_fields = [field.name for field in models.Specialty._meta.fields]


@admin.register(models.TreatmentProfile)
class TreatmentProfileAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.TreatmentProfile._meta.fields]
    search_fields = [field.name for field in models.TreatmentProfile._meta.fields]


@admin.register(models.Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Education._meta.fields]
    search_fields = [field.name for field in models.Education._meta.fields]


@admin.register(models.AdvancedTraining)
class AdvancedTrainingAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.AdvancedTraining._meta.fields]
    search_fields = [field.name for field in models.AdvancedTraining._meta.fields]


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Image._meta.fields]
    search_fields = [field.name for field in models.Image._meta.fields]


@admin.register(models.Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Result._meta.fields]
    search_fields = [field.name for field in models.Result._meta.fields]


@admin.register(models.Promotion)
class PromotionAdmin(admin.ModelAdmin):
    list_display = [field.name for field in models.Promotion._meta.fields]
    search_fields = [field.name for field in models.Promotion._meta.fields]
