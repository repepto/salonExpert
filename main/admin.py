from django.contrib import admin
#from django import forms
#from redactor.widgets import RedactorEditor

from nested_inline.admin import NestedStackedInline, NestedModelAdmin
from main.models import *
from django.db import models

# Register your models here.

admin.site.register(Staff)
#admin.site.register(Services)

class WorkInline(NestedStackedInline):
    model = Work
    fieldsets = [
        ('Заголовок работы', {'fields': ['header']}),
        ('Фотография работы (600 на 600)', {'fields': ['photo']}),
        ('Описание работы', {'fields': ['description']}),
    ]
    extra = 1


class WorkPreviewInline(NestedStackedInline):
    model = WorkPreview
    fieldsets = [
        ('Фотография предпросмотра (120 на 120)', {'fields': ['photo']}),
    ]
    inlines = [WorkInline]
    extra = 1


class ServicesAdmin(NestedModelAdmin):
    fieldsets = [
        (None, {'fields': ['header']}),
        (None, {'fields': ['description']}),
    ]
    inlines = [WorkPreviewInline]

admin.site.register(Service, ServicesAdmin)