# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-19 08:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0013_category_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='type',
            field=models.CharField(choices=[('Напольные покрытия', 'Напольные покрытия'), ('Потолочные системы', 'Потолочные системы'), ('Настенные покрытия', 'Настенные покрытия'), ('Текстиль', 'Текстиль')], default='Напольные покрытия', max_length=4, verbose_name='Тип категории'),
        ),
    ]
