# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('description', ckeditor.fields.RichTextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Promo',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('header', models.CharField(verbose_name='Заголовок', max_length=40)),
                ('description', ckeditor.fields.RichTextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Secret',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('header', models.CharField(verbose_name='Заголовок', max_length=40)),
                ('description', ckeditor.fields.RichTextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Service',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('header', models.CharField(verbose_name='Услуга', max_length=40)),
                ('description', ckeditor.fields.RichTextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Staff',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('name', models.CharField(verbose_name='имя мастера', max_length=40)),
                ('occupation', models.CharField(verbose_name='что делает', max_length=40)),
                ('photo', models.ImageField(upload_to='', verbose_name='фотография мастера')),
                ('description', ckeditor.fields.RichTextField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(primary_key=True, auto_created=True, verbose_name='ID', serialize=False)),
                ('photo', models.ImageField(upload_to='')),
                ('photo_preview', models.ImageField(upload_to='')),
                ('header', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('service', models.ForeignKey(to='main.Service')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
