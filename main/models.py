from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class Staff(models.Model):
    name = models.CharField(max_length=40, verbose_name='имя мастера')
    occupation = models.CharField(max_length=40, verbose_name='что делает')
    photo = models.ImageField(verbose_name='фотография мастера')
    #text = models.TextField(max_length=400)
    description = RichTextField(verbose_name='описание')

    def __str__(self):
        return self.name



class Service(models.Model):
    header = models.CharField(max_length=40, verbose_name='Услуга')
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return self.header


class Secret(models.Model):
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return self.header

class Promo(models.Model):
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return self.header


class Work(models.Model):
    service = models.ForeignKey(Service)
    photo = models.ImageField(verbose_name='Основное фото')
    photo_preview = models.ImageField(verbose_name='Фото предпросмотра')
    header = models.CharField(max_length=40, verbose_name='Заголовок')
    description = models.TextField('Описание')


    def __str__(self):
        return self.service.header + ". Презентация работы"

class About(models.Model):
    description = RichTextField(verbose_name='Описание')

    def __str__(self):
        return 'О салоне'
