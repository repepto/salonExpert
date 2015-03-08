# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_auto_20150308_1641'),
    ]

    operations = [
        migrations.AddField(
            model_name='secret',
            name='photo_preview',
            field=models.ImageField(upload_to='', default=datetime.datetime(2015, 3, 8, 14, 43, 5, 249816, tzinfo=utc), verbose_name='предпросмотр'),
            preserve_default=False,
        ),
    ]
