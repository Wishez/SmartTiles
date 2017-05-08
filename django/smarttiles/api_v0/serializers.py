from rest_framework import serializers
from catalog.models import *

class CategoryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'name',
        ]

class FirmDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Firm
        fields = [
            'name',
        ]

class CollectionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = [
            'name',
        ]