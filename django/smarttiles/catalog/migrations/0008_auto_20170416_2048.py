# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-16 17:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0007_collection_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='collection',
            name='img',
            field=models.FileField(upload_to='uploads/collections', verbose_name='Картинка коллекции'),
        ),
    ]