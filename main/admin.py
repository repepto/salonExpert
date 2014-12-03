from django.contrib import admin
#from django import forms
#from redactor.widgets import RedactorEditor
from main.models import Staff
from main.models import Service
from main.models import WorkPreview
from django.db import models

# Register your models here.

admin.site.register(Staff)
#admin.site.register(Services)


class WorkPreviewInline(admin.StackedInline):
    model = WorkPreview
    fieldsets = [
        ('photo',               {'fields': ['photo']}),
    ]
    extra = 1


class ServicesAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['header']}),
        (None, {'fields': ['description']}),
    ]
    inlines = [WorkPreviewInline]

admin.site.register(Service, ServicesAdmin)