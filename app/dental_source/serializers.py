from rest_framework import serializers

from dental_source import models


class AccountSerializer(serializers.ModelSerializer):
    full_name = serializers.CharField(read_only=True, required=False)

    class Meta:
        model = models.Account
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Question
        fields = "__all__"


class PriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Price
        fields = "__all__"


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contact
        fields = "__all__"


class SpecialtySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Specialty
        fields = "__all__"


class TreatmentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TreatmentProfile
        fields = "__all__"


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Education
        fields = "__all__"


class AdvancedTrainingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AdvancedTraining
        fields = "__all__"


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Image
        fields = "__all__"


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Result
        fields = "__all__"


class PromotionSerializer(serializers.ModelSerializer):
    price = PriceSerializer(many=False, read_only=True)
    price_id = serializers.PrimaryKeyRelatedField(
        source="price", queryset=models.Price.objects.all(), many=False, write_only=True, required=True
    )

    class Meta:
        model = models.Promotion
        fields = "__all__"


class DoctorSerializer(serializers.ModelSerializer):
    specialty = SpecialtySerializer(many=True, read_only=True)
    specialty_id = serializers.PrimaryKeyRelatedField(
        source="specialty", queryset=models.Specialty.objects.all(), many=True, write_only=True, required=True
    )
    treatmentProfile = TreatmentProfileSerializer(many=True, read_only=True)
    treatmentProfile_id = serializers.PrimaryKeyRelatedField(
        source="treatmentProfile", queryset=models.TreatmentProfile.objects.all(), many=True, write_only=True, required=True
    )
    education = EducationSerializer(many=True, read_only=True)
    education_id = serializers.PrimaryKeyRelatedField(
        source="education", queryset=models.Education.objects.all(), many=True, write_only=True, required=True
    )
    advancedTraining = AdvancedTrainingSerializer(many=True, read_only=True)
    advancedTraining_id = serializers.PrimaryKeyRelatedField(
        source="advancedTraining", queryset=models.AdvancedTraining.objects.all(), many=True, write_only=True, required=True
    )

    class Meta:
        model = models.Doctor
        fields = "__all__"


class ScheduleSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(many=False, read_only=True)
    doctor_id = serializers.PrimaryKeyRelatedField(
        source="doctor", queryset=models.Doctor.objects.all(), many=False, write_only=True, required=True
    )

    class Meta:
        model = models.Schedule
        fields = "__all__"


class AppointmentSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(many=False, read_only=True)
    doctor_id = serializers.PrimaryKeyRelatedField(
        source="doctor", queryset=models.Doctor.objects.all(), many=False, write_only=True, required=True
    )

    class Meta:
        model = models.Appointment
        fields = "__all__"


class CaseSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(many=False, read_only=True)
    doctor_id = serializers.PrimaryKeyRelatedField(
        source="doctor", queryset=models.Doctor.objects.all(), many=False, write_only=True, required=True
    )
    price = PriceSerializer(many=True, read_only=True)
    price_id = serializers.PrimaryKeyRelatedField(
        source="price", queryset=models.Price.objects.all(), many=True, write_only=True, required=True
    )
    images = ImageSerializer(many=True, read_only=True)
    images_id = serializers.PrimaryKeyRelatedField(
        source="images", queryset=models.Image.objects.all(), many=True, write_only=True, required=True
    )

    class Meta:
        model = models.Case
        fields = "__all__"