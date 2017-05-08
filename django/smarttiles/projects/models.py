# -*- encoding: utf-8 -*-
from django.db import models

from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Project(models.Model):
    name = models.CharField(verbose_name='Имя проекта', max_length=100)
    desc = models.TextField(
        verbose_name='Описание проекта',
        null=True,
        blank=True)

    present_img = models.FileField(
        verbose_name='Главное изображение проекта',
        upload_to='uploads/projects')

    img_1 = models.FileField(
        verbose_name='Изображение 1 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_2 = models.FileField(
        verbose_name='Изображение 2 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_3 = models.FileField(
        verbose_name='Изображение 3 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_4 = models.FileField(
        verbose_name='Изображение 4 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_5 = models.FileField(
        verbose_name='Изображение 5 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_6 = models.FileField(
        verbose_name='Изображение 6 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_7 = models.FileField(
        verbose_name='Изображение 7 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_8 = models.FileField(
        verbose_name='Изображение 8 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_9 = models.FileField(
        verbose_name='Изображение 9 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_10 = models.FileField(
        verbose_name='Изображение 10 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_11 = models.FileField(
        verbose_name='Изображение 11 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_12 = models.FileField(
        verbose_name='Изображение 12 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_13 = models.FileField(
        verbose_name='Изображение 13 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_14 = models.FileField(
        verbose_name='Изображение 14 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)
    img_15 = models.FileField(
        verbose_name='Изображение 15 проекта',
        upload_to='uploads/projects',
        null=True,
        blank=True)

    def show(self):
        self.save()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекты'
