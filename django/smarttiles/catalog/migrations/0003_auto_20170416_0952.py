# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-16 06:52
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0002_auto_20170416_0935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='firm',
            name='category',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalog.Category', verbose_name='Категория, которой принадлежит фирма'),
        ),
    ]