# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-23 09:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_slider'),
    ]

    operations = [
        migrations.AlterField(
            model_name='slider',
            name='slide_10',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='10й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_11',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='11й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_12',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='12й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_5',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='5й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_6',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='6й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_7',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='7й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_8',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='8й слайд'),
        ),
        migrations.AlterField(
            model_name='slider',
            name='slide_9',
            field=models.FileField(blank=True, null=True, upload_to='uploads/slider/', verbose_name='9й слайд'),
        ),
    ]
