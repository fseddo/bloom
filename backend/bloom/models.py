from django.db import models

# Create your models here.

class Flower(models.Model):
    OCCASIONS = [
        ("FALL", "Fall"),
        ("BEST_SELLERS", "Best Sellers"),
        ("THANKSGIVING", "Thanksgiving"),
        ("PLANT", "Plant")
    ]
    
    COLORS = [
        ("WHITE", "White"),
        ("PURPLE", "Purple"),
        ("PINK", "Pink"),
        ("ORANGE", "Orange"),
        ("RED", "Red"),
        ("YELLOW", "Yellow")
    ]

    name = models.CharField(max_length=120)
    occasion = models.CharField(max_length=50, choices=OCCASIONS)
    color = models.CharField(max_length=50, choices=COLORS)
    price = models.IntegerField()
    imageUrl = models.URLField()
    imageUrlSecondary = models.URLField()
    description = models.CharField(max_length=1000)
    amountInStock = models.IntegerField()


    def _str_(self):
        return self.name