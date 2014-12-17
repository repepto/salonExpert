# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_auto_20141204_2142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='description',
            field=redactor.fields.RedactorField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='occupation',
            field=models.CharField(verbose_name='что делает', max_length=40),
            preserve_default=True,
        ),
    ]
