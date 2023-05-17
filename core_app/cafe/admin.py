from django.contrib import admin
from .models import Cafe


# Register your models here.
@admin.register(Cafe)
class CafeAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'tipo', 'region')
    list_display_links = ('id', 'nombre')
    search_fields = ('nombre',)
    list_per_page = 20
    ordering = ('nombre',)
