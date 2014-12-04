from django.contrib import admin
#from django import forms
#from redactor.widgets import RedactorEditor

from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from main.models import *
from django.db import models

# Register your models here.

admin.site.register(Staff)
#admin.site.register(Services)


class WorkPreviewInline(NestedStackedInline):
    model = WorkPreview
    fieldsets = [
        ('Фотография предпросмотра (120 на 120)', {'fields': ['photoPrew']}),
    ]
    extra = 1


class WorkInline(NestedStackedInline):
    model = Work
    fieldsets = [
        ('Заголовок работы', {'fields': ['header']}),
        ('Фотография работы (600 на 600)', {'fields': ['photo']}),
        ('Описание работы', {'fields': ['description']}),
    ]
    inlines = [WorkPreviewInline]
    extra = 1


class ServicesAdmin(NestedModelAdmin):
    fieldsets = [
        (None, {'fields': ['header']}),
        (None, {'fields': ['description']}),
    ]
    inlines = [WorkInline]

admin.site.register(Service, ServicesAdmin)