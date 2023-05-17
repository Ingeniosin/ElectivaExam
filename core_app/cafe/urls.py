from django.urls import path

from .views import CafeList

urlpatterns = [
    path('cafe', CafeList.as_view(), name='lista-predios'),
]
