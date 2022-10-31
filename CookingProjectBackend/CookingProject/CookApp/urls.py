from .api import CategoryViewSet, RecipeViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('categories', CategoryViewSet, 'categories')
router.register('recipes', RecipeViewSet, 'recipes')

urlpatterns = router.urls
