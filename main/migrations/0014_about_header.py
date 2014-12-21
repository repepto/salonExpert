# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='header',
            field=models.CharField(max_length=40, default='ret', verbose_name='Услуга'),
            preserve_default=False,
        ),
    ]
