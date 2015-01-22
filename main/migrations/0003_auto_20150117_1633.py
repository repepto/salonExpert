# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20150110_1739'),
    ]

    operations = [
        migrations.CreateModel(
            name='Index',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('logo', models.ImageField(verbose_name='Лготип', upload_to='')),
                ('header', models.CharField(verbose_name='Заголовок', max_length=40)),
                ('description', models.TextField(verbose_name='Описание')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AlterField(
            model_name='promo',
            name='photo',
            field=models.ImageField(verbose_name='предпросмотр(210x150)', upload_to=''),
            preserve_default=True,
        ),
    ]
