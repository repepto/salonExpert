# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('photo', models.ImageField(upload_to='')),
                ('header', models.CharField(max_length=40)),
                ('description', models.TextField()),
                ('workPreview', models.OneToOneField(to='main.WorkPreview')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
