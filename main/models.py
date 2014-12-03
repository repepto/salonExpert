from django.db import models
from redactor.fields import RedactorField

# Create your models here.

class Staff(models.Model):
    name = models.CharField(max_length=40)
    occupation = models.CharField(max_length=50)
    photo = models.ImageField()
    #text = models.TextField(max_length=400)
    description = RedactorField(
    verbose_name=u'Text',
    redactor_options={'lang': 'en', 'focus': 'true'},
    upload_to='uploads/',
    allow_file_upload=False,
    allow_image_upload=False
    )

    def __str__(self):              # __unicode__ on Python 2
        return self.name



class Service(models.Model):
    header = models.CharField(max_length=40)
    description = RedactorField(
    verbose_name=u'Text',
    redactor_options={'lang': 'en', 'focus': 'true'},
    #upload_to='uploads/',
    allow_file_upload=False,
    allow_image_upload=False
    )

    def __str__(self):              # __unicode__ on Python 2
        return self.header


class WorkPreview(models.Model):
    service = models.ForeignKey(Service)
    photo = models.ImageField()