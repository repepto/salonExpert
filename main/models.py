from django.db import models
from ckeditor.fields import RichTextField
from ckeditor.widgets import CKEditorWidget

# Create your models here.

class Staff(models.Model):
    name = models.CharField(max_length=40, verbose_name='имя мастера')
    occupation = models.CharField(max_length=40, verbose_name='что делает')
    photo = models.ImageField(verbose_name='фотография мастера')
    #text = models.TextField(max_length=400)
    description = models.TextField('Описание')

    def __str__(self):
        return self.name



class Service(models.Model):
    header = models.CharField(max_length=40, verbose_name='Услуга')
    description = RichTextField(verbose_name='Описание')
    price = RichTextField(verbose_name='Прайс')

    def __str__(self):
        return self.header


class Secret(models.Model):
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    photo = models.ImageField(verbose_name='предпросмотр(520x240)')
    photoM = models.ImageField(verbose_name='Основное фото')
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return self.header

class Promo(models.Model):
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    photo = models.ImageField(verbose_name='(520x240)')
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return self.header


class Work(models.Model):
    service = models.ForeignKey(Service)
    photo = models.ImageField(verbose_name='Основное фото')
    photo_preview = models.ImageField(verbose_name='предпросмотр(300x300)')
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    description = models.TextField('Описание')


    def __str__(self):
        return self.service.header + ". Презентация работы"

class About(models.Model):
    photo = models.ImageField(verbose_name='Основное фото')
    description = RichTextField(verbose_name='Описание')
    def __str__(self):
        return 'О салоне'

class Index(models.Model):

    logo = models.ImageField(verbose_name='Лготип')
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    description = models.TextField('Описание')

    def __str__(self):
        return 'Главная'
