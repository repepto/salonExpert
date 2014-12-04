# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20141204_2003'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workpreview',
            name='work',
        ),
        migrations.DeleteModel(
            name='WorkPreview',
        ),
        migrations.AddField(
            model_name='work',
            name='photoPreview',
            field=models.ImageField(upload_to='', default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='service',
            name='description',
            field=redactor.fields.RedactorField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='service',
            name='header',
            field=models.CharField(verbose_name='Услуга', max_length=40),
            preserve_default=True,
        ),
    ]
