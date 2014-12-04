from django.db import models
from redactor.fields import RedactorField

# Create your models here.

class Staff(models.Model):
    name = models.CharField(max_length=40, verbose_name='имя мастера')
    occupation = models.CharField(max_length=50, verbose_name='что делает')
    photo = models.ImageField(verbose_name='фотография мастера')
    #text = models.TextField(max_length=400)
    description = RedactorField(
    verbose_name=u'Описание услуги',
    redactor_options={'lang': 'en', 'focus': 'true'},
    #upload_to='uploads/',
    allow_file_upload=False,
    allow_image_upload=False
    )

    def __str__(self):              # __unicode__ on Python 2
        return self.name



class Service(models.Model):
    header = models.CharField(max_length=40, verbose_name='Услуга')
    description = RedactorField(
    verbose_name='Описание',
    redactor_options={'lang': 'en', 'focus': 'true'},
    #upload_to='uploads/',
    allow_file_upload=False,
    allow_image_upload=False
    )

    def __str__(self):              # __unicode__ on Python 2
        return self.header


class Work(models.Model):
    service = models.ForeignKey(Service)
    photo = models.ImageField()
    photo_preview = models.ImageField()
    header = models.CharField(max_length=40)
    description = models.TextField()


    def __str__(self):              # __unicode__ on Python 2
        return "Услуга: " + self.service.header + " (презентация работы)"