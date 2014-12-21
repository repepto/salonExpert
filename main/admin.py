from django.contrib import admin
#from django import forms
#from redactor.widgets import RedactorEditor

from main.models import *
from django.db import models

# Register your models here.

admin.site.register(Staff)
admin.site.register(Secret)
admin.site.register(Promo)
admin.site.register(About)

class WorkInline(admin.StackedInline):
    model = Work
    fieldsets = [
        ('Заголовок', {'fields': ['header']}),
        ('Фотография (600 на 600)', {'fields': ['photo']}),
        ('Фотография предпросмотра (100 на 100)', {'fields': ['photo_preview']}),
        ('Описание', {'fields': ['description']}),
    ]
    extra = 0


class ServicesAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['header']}),
        (None, {'fields': ['description']}),
    ]
    inlines = [WorkInline]

admin.site.register(Service, ServicesAdmin)