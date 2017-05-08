# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-16 17:46
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('catalog', '0005_auto_20170416_2043'),
    ]

    operations = [
        migrations.CreateModel(
            name='Collection',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Полное имя коллекции')),
                ('short_name', models.CharField(max_length=8, verbose_name='Короткое имя коллекции')),
                ('desc', models.CharField(blank=True, max_length=250, null=True, verbose_name='Описание коллекции')),
                ('img', models.FileField(upload_to='uploads/firms', verbose_name='Картинка коллекции')),
                ('firm', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='catalog.Firm', verbose_name='Фирма, которой принадлежит коллекция')),
            ],
            options={
                'verbose_name': 'Коллекция',
                'verbose_name_plural': 'Коллекции',
            },
        ),
    ]
