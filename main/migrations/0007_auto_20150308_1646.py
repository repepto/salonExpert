# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_secret_photo_preview'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='secret',
            name='photo_preview',
        ),
        migrations.AddField(
            model_name='secret',
            name='photoM',
            field=models.ImageField(default=datetime.datetime(2015, 3, 8, 14, 46, 4, 617075, tzinfo=utc), verbose_name='Основное фото', upload_to=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='secret',
            name='photo',
            field=models.ImageField(verbose_name='предпросмотр', upload_to=''),
            preserve_default=True,
        ),
    ]
