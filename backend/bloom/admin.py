from django.contrib import admin
from .models import Flower

class FlowerAdmin(admin.ModelAdmin):
    list_display = ('name', 'color', 'occasion', 'price', 'amountInStock', 'imageUrl', 'imageUrlSecondary', 'description')

# Register your models here.
admin.site.register(Flower, FlowerAdmin)
