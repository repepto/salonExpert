# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20141204_1307'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workpreview',
            name='service',
        ),
        migrations.AddField(
            model_name='work',
            name='service',
            field=models.ForeignKey(default=1, to='main.Service'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='workpreview',
            name='work',
            field=models.OneToOneField(to='main.Work', default=1),
            preserve_default=False,
        ),
    ]
