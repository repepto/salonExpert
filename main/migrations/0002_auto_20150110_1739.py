# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import ckeditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='promo',
            name='photo',
            field=models.ImageField(default=0, upload_to='', verbose_name='предпросмотр'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='secret',
            name='photo',
            field=models.ImageField(default=0, upload_to='', verbose_name='предпросмотр'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='about',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='promo',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='secret',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='service',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='staff',
            name='description',
            field=ckeditor.fields.RichTextField(verbose_name='описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='description',
            field=models.TextField(verbose_name='Описание'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='header',
            field=models.CharField(max_length=40, verbose_name='Заголовок'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='photo',
            field=models.ImageField(upload_to='', verbose_name='Основное фото'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='work',
            name='photo_preview',
            field=models.ImageField(upload_to='', verbose_name='Фото предпросмотра'),
            preserve_default=True,
        ),
    ]
