# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20141204_1315'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workpreview',
            old_name='photo',
            new_name='photoPrew',
        ),
    ]
