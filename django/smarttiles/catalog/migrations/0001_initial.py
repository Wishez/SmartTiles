# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-14 11:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


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
                ('img', models.FileField(upload_to='uploads/categories', verbose_name='Картинка категории')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
            },
        ),
        migrations.CreateModel(
            name='Firm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Полное имя фирмы')),
                ('short_name', models.CharField(max_length=8, verbose_name='Короткое имя фирмы')),
                ('desc', models.CharField(blank=True, max_length=250, null=True, verbose_name='Описание фирмы')),
                ('img', models.FileField(upload_to='uploads/categories', verbose_name='Картинка фирмы')),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='catalog.Category', verbose_name='Категория, которой принадлежит фирма')),
            ],
            options={
                'verbose_name': 'Фирма',
                'verbose_name_plural': 'Фирмы',
            },
        ),
    ]