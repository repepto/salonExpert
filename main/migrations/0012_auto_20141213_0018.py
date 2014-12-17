# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_secret'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promo',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('header', models.CharField(max_length=40, verbose_name='Заголовок')),
                ('description', redactor.fields.RedactorField(verbose_name='Описание')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='secret',
            name='header',
            field=models.CharField(max_length=40, verbose_name='Заголовок'),
            preserve_default=True,
        ),
    ]
