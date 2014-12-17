# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_auto_20141210_0049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='description',
            field=redactor.fields.RedactorField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='service',
            name='header',
            field=models.CharField(max_length=40, verbose_name='Услуга'),
            preserve_default=True,
        ),
    ]
