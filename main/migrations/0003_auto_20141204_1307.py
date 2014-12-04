# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_work'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='work',
            name='workPreview',
        ),
        migrations.AlterField(
            model_name='service',
            name='description',
            field=redactor.fields.RedactorField(verbose_name='Описание услуги'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='service',
            name='header',
            field=models.CharField(max_length=40, verbose_name='Название услуги'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='description',
            field=redactor.fields.RedactorField(verbose_name='Описание услуги'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='name',
            field=models.CharField(max_length=40, verbose_name='имя мастера'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='occupation',
            field=models.CharField(max_length=50, verbose_name='что делает'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='фотография мастера'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='workpreview',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='Фотография:'),
            preserve_default=True,
        ),
    ]
