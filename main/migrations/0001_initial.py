# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import redactor.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('header', models.CharField(max_length=40)),
                ('description', redactor.fields.RedactorField(verbose_name='Text')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('name', models.CharField(max_length=40)),
                ('occupation', models.CharField(max_length=50)),
                ('photo', models.ImageField(upload_to='')),
                ('description', redactor.fields.RedactorField(verbose_name='Text')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='WorkPreview',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, verbose_name='ID', serialize=False)),
                ('photo', models.ImageField(upload_to='')),
                ('service', models.ForeignKey(to='main.Service')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
