# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_auto_20141204_2112'),
    ]

    operations = [
        migrations.RenameField(
            model_name='work',
            old_name='photoPreview',
            new_name='photo_preview',
        ),
    ]
