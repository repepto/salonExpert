# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.utils.timezone import utc
import datetime


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20150117_1633'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='Основное фото', default=datetime.datetime(2015, 3, 8, 13, 3, 4, 233038, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
