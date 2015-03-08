# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20150308_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promo',
            name='photo',
            field=models.ImageField(verbose_name='(520x240)', upload_to=''),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='secret',
            name='photo',
            field=models.ImageField(verbose_name='предпросмотр(520x240)', upload_to=''),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='photo_preview',
            field=models.ImageField(verbose_name='предпросмотр(300x300)', upload_to=''),
            preserve_default=True,
        ),
    ]
