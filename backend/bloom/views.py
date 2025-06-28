from django.shortcuts import render
from rest_framework import viewsets
from .serializers import FlowerSerializer
from .models import Flower

# Create your views here.

class FlowerView(viewsets.ModelViewSet):
    serializer_class = FlowerSerializer
    queryset = Flower.objects.all()