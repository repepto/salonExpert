# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_auto_20141210_0053'),
    ]

    operations = [
        migrations.CreateModel(
            name='Secret',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')),
                ('header', models.CharField(max_length=40, verbose_name='Услуга')),
                ('description', redactor.fields.RedactorField(verbose_name='Описание')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
