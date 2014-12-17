# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20141209_1307'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='description',
            field=models.CharField(verbose_name='Услуга', max_length=40),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='service',
            name='header',
            field=redactor.fields.RedactorField(verbose_name='Описание'),
            preserve_default=True,
        ),
    ]
