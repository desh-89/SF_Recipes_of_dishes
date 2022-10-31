from django.db import models


# Create your models here.
class Category(models.Model):
    categoryName = models.CharField(max_length=64)

    def __str__(self):
        return self.categoryName


class Recipe(models.Model):
    recipeName = models.CharField(max_length=32)
    recipeText = models.TextField(max_length=500)
    categoryId = models.ForeignKey('Category', on_delete=models.CASCADE)

    def __str__(self):
        return self.recipeName