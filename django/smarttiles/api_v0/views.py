# from django.shortcuts import render
from rest_framework import viewsets
from .serializers import *

# Create your views here.

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategoryDetailSerializer


class FirmViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Firm.objects.all()
    serializer_class = FirmDetailSerializer


class CollectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionDetailSerializer