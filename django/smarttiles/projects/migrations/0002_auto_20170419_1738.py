# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-19 14:38
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='desc',
            field=models.TextField(blank=True, null=True, verbose_name='Описание проекта'),
        ),
    ]