from django.db import models
from django.core.validators import MaxValueValidator


# Create your models here.

class Flower(models.Model):
    OCCASIONS = [
        ("ANNIVERSARY", "Anniversary"),
        ("BIRTHDAY", "Birthday"),
        ("CONGRATULATIONS", "Congratulations"),
        ("HOUSEWARMING", "Housewarming"),
        ("JUST_BECAUSE", "Just Because"),
        ("SYMPATHY", "Sympathy"),
        ("THANK_YOU", "Thank You"),
    ]
    
    COLLECTIONS = [
        ("BURLAP_WRAPPED", "Burlap Wrapped"),
        ("VASE_VASE_BABY", "Vase, Vase Baby"),
        ("FREE_SHIP_SHOP", "Free Ship Shop"),
        ("OUR_FAVORITES", "Our Favorites"),
        ("BIG_BOX_SHOP", "Big Box Shop"),
        ("WITH_HEART", "With Heart"),
        ("PET_FRIENDLY", "Pet Friendly"),
        ("PLANTS", "Plants"),
        ("WREATHS", "Wreaths"),
    ]

    FLOWER_TYPES = [
        ("ALSTROEMERIA", "Alstroemeria"),
        ("ANEMONES", "Anemones"),
        ("DAISIES", "DAISIES"),
        ("HYDRANGEA", "Hydrangea"),
        ("LILIES", "Lilies"),
        ("PEONIES", "Peonies"),
        ("RANUNCULUS", "Ranunculus"),
        ("ROSES", "Roses"),
        ("ROSELILIES", "Roselilies"),
        ("SPECIALY_GARDEN_ROSES", "Specialty Garden Roses"),
        ("SUNFLOWERS", "Sunflowers"),
    ]

    name = models.CharField(max_length=120)
    occasion = models.CharField(max_length=50, choices=OCCASIONS, null=True)
    collection = models.CharField(max_length=50, choices=COLLECTIONS, null=True)
    price = models.IntegerField()
    imageUrls = models.JSONField(default=list)
    description = models.CharField(max_length=1000)
    details = models.JSONField(default=list)
    petSafe = models.BooleanField(null=True),
    isSingleVariety = models.BooleanField(default=False)
    discount = models.IntegerField(
        validators=[MaxValueValidator(99)],
        default=0
    )
    amountInStock = models.IntegerField()
    deliveryLeadTime = models.IntegerField(null=True)

    def _str_(self):
        return self.name
    


class AddOnItem(models.Model):
    name = models.CharField(max_length=120)
    price = models.IntegerField()
    description = models.CharField(max_length=1000)
    imageUrl = models.CharField(max_length=500)
    amountInStock = models.IntegerField()

    def _str_(self):
        return self.name