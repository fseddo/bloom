from django.contrib import admin
from .models import Flower, AddOnItem

class FlowerAdmin(admin.ModelAdmin):
    list_display = (
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
    

class AddOnItemAdmin(admin.ModelAdmin):
    list_display = (
        'name', 
        'price', 
        'imageUrl', 
        'description', 
        'amountInStock',
    )

# Register your models here.
admin.site.register(Flower, FlowerAdmin)
admin.site.register(AddOnItem, AddOnItemAdmin)

