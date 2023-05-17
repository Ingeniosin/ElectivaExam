from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Cafe
from .serializers import CafeSerializer


class CafeList(generics.ListCreateAPIView):
    queryset = Cafe.objects.all()
    serializer_class = CafeSerializer
