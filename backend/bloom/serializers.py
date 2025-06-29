from rest_framework import serializers
from .models import Flower, AddOnItem

class FlowerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flower
        fields = (
            'name', 
            'occasion', 
            'collection', 
            'price', 
            'imageUrls', 
            'description', 
            'details', 
            'petSafe',
            'isSingleVariety',
            'discount',
            'amountInStock',
            'deliveryLeadTime'
        )
        


class AddOnItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddOnItem
        fields = (
            'name', 
            'price', 
            'imageUrl', 
            'description', 
            'amountInStock',
        )