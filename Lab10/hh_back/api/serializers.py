from rest_framework import serializers
from .models import Company, Vacancy


# class CompanySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Company
#         fields = '__all__'
#
# class VacancySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Vacancy
#         fields = '__all__'



class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=500)
    city = serializers.CharField(max_length=100)
    address = serializers.CharField(max_length=100)

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.city = validated_data.get('city', instance.city)
        instance.address = validated_data.get('address', instance.address)
        instance.save()
        return instance

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100)
    description = serializers.CharField(max_length=500)
    salary = serializers.FloatField()
    company = CompanySerializer()

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance




