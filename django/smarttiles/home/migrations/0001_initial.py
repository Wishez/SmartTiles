# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-10 18:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Полное имя категории')),
                ('short_name', models.CharField(max_length=8, verbose_name='Короткое имя категории')),
                ('desc', models.CharField(blank=True, max_length=250, null=True, verbose_name='Описание категории')),
                ('img', models.FileField(upload_to='uploads/<django.db.models.fields.CharField>', verbose_name='Картинка категории')),
            ],
        ),
    ]