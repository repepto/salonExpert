# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_about_photo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='secret',
            name='photo',
            field=models.ImageField(verbose_name='Основное фото', upload_to=''),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='description',
            field=models.TextField(verbose_name='Описание'),
            preserve_default=True,
        ),
    ]
