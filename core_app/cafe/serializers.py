from .models import Cafe
from rest_framework import serializers


class CafeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cafe
        fields = '__all__'
