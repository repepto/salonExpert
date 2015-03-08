# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import datetime
from django.utils.timezone import utc
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20150308_1719'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='price',
            field=ckeditor.fields.RichTextField(verbose_name='Прайс', default=datetime.datetime(2015, 3, 8, 18, 6, 13, 785961, tzinfo=utc)),
            preserve_default=False,
        ),
    ]
