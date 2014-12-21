# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_auto_20141213_0018'),
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('description', redactor.fields.RedactorField(verbose_name='Описание')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
