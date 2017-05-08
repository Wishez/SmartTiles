# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone

from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField(verbose_name='Полное имя категории', max_length=100)
    desc = models.CharField(verbose_name='Описание категории', max_length=250, null=True, blank=True)
    img = models.FileField(verbose_name='Картинка категории', upload_to='uploads/categories')

    types = (
        ('CC', 'Напольные покрытия'),
        ('CS', 'Потолочные системы'),
        ('WC', 'Настенные покрытия'),
        ('TT', 'Текстиль'),
    )

    type = models.CharField(
        max_length=4,
        choices=types,
        default='CC',
        verbose_name='Тип категории'
    )

    def write(self):
        self.save()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

@python_2_unicode_compatible
class Firm(models.Model):
    name = models.CharField(verbose_name='Полное имя фирмы', max_length=100)
    desc = models.CharField(verbose_name='Описание фирмы', max_length=250, null=True, blank=True)
    img = models.FileField(verbose_name='Картинка фирмы', upload_to='uploads/firms')

    category = models.ForeignKey(
        Category,
        blank=True,
        null=True,
        verbose_name='Категория, которой принадлежит фирма'
    )

    def write(self):
        self.save()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Фирма'
        verbose_name_plural = 'Фирмы'

@python_2_unicode_compatible
class Collection(models.Model):
    name = models.CharField(verbose_name='Полное имя коллекции', max_length=100)
    desc = models.CharField(verbose_name='Описание коллекции', max_length=250, null=True, blank=True)
    img = models.FileField(verbose_name='Картинка коллекции', upload_to='uploads/collections')

    name_sample_1 = models.CharField(verbose_name='Имя 1 образца', max_length=100,  blank=True, null=True)
    img_sample_1 = models.FileField(verbose_name='Картинка 1 образца', upload_to='uploads/samples', blank=True, null=True)
    desc_sample_1 = models.CharField(verbose_name='Описание 1 образца', max_length=250, blank=True, null=True)

    name_sample_2 = models.CharField(verbose_name='Имя 2 образца', max_length=100, blank=True, null=True)
    img_sample_2 = models.FileField(verbose_name='Картинка 2 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_2 = models.CharField(verbose_name='Описание 2 образца', max_length=250, blank=True, null=True)

    name_sample_3 = models.CharField(verbose_name='Имя 3 образца', max_length=100, blank=True, null=True)
    img_sample_3 = models.FileField(verbose_name='Картинка 3 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_3 = models.CharField(verbose_name='Описание 3 образца', max_length=250, blank=True, null=True)

    name_sample_4 = models.CharField(verbose_name='Имя 4 образца', max_length=100, blank=True, null=True)
    img_sample_4 = models.FileField(verbose_name='Картинка 4 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_4 = models.CharField(verbose_name='Описание 4 образца', max_length=250, blank=True, null=True)

    name_sample_5 = models.CharField(verbose_name='Имя 5 образца', max_length=100, blank=True, null=True)
    img_sample_5 = models.FileField(verbose_name='Картинка 5 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_5 = models.CharField(verbose_name='Описание 5 образца', max_length=250, blank=True, null=True)

    name_sample_6 = models.CharField(verbose_name='Имя 6 образца', max_length=100, blank=True, null=True)
    img_sample_6 = models.FileField(verbose_name='Картинка 6 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_6 = models.CharField(verbose_name='Описание 6 образца', max_length=250, blank=True, null=True)

    name_sample_7 = models.CharField(verbose_name='Имя 7 образца', max_length=100, blank=True, null=True)
    img_sample_7 = models.FileField(verbose_name='Картинка 7 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_7 = models.CharField(verbose_name='Описание 7 образца', max_length=250, blank=True, null=True)

    name_sample_8 = models.CharField(verbose_name='Имя 8 образца', max_length=100, blank=True, null=True)
    img_sample_8 = models.FileField(verbose_name='Картинка 8 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_8 = models.CharField(verbose_name='Описание 8 образца', max_length=250, blank=True, null=True)


    name_sample_9 = models.CharField(verbose_name='Имя 9 образца', max_length=100, blank=True, null=True)
    img_sample_9 = models.FileField(verbose_name='Картинка 9 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_9 = models.CharField(verbose_name='Описание 9 образца', max_length=250, blank=True, null=True)

    name_sample_10 = models.CharField(verbose_name='Имя 10 образца ', max_length=100, blank=True, null=True)
    img_sample_10 = models.FileField(verbose_name='Картинка 10 образца ', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_10 = models.CharField(verbose_name='Описание 10 образца', max_length=250, blank=True, null=True)

    name_sample_11 = models.CharField(verbose_name='Имя 11 образца ', max_length=100, blank=True, null=True)
    img_sample_11 = models.FileField(verbose_name='Картинка 11 образца ', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_11 = models.CharField(verbose_name='Описание 11 образца', max_length=250, blank=True, null=True)

    name_sample_12 = models.CharField(verbose_name='Имя 12 образца', max_length=100, blank=True, null=True)
    img_sample_12 = models.FileField(verbose_name='Картинка 12 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_12 = models.CharField(verbose_name='Описание 12 образца', max_length=250, blank=True, null=True)

    name_sample_13 = models.CharField(verbose_name='Имя 13 образца ', max_length=100, blank=True, null=True)
    img_sample_13 = models.FileField(verbose_name='Картинка 13 образца ', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_13 = models.CharField(verbose_name='Описание 13 образца', max_length=250, blank=True, null=True)

    name_sample_14 = models.CharField(verbose_name='Имя 14 образца', max_length=100, blank=True, null=True)
    img_sample_14 = models.FileField(verbose_name='Картинка 14 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_14 = models.CharField(verbose_name='Описание 14 образца', max_length=250, blank=True, null=True)

    name_sample_15 = models.CharField(verbose_name='Имя образца', max_length=100, blank=True, null=True)
    img_sample_15 = models.FileField(verbose_name='Картинка образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_15 = models.CharField(verbose_name='Описание 15 образца', max_length=250, blank=True, null=True)

    name_sample_16 = models.CharField(verbose_name='Имя 16 образца', max_length=100, blank=True, null=True)
    img_sample_16 = models.FileField(verbose_name='Картинка 16 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_16 = models.CharField(verbose_name='Описание 16 образца', max_length=250, blank=True, null=True)

    name_sample_17 = models.CharField(verbose_name='Имя 17 образца', max_length=100, blank=True, null=True)
    img_sample_17 = models.FileField(verbose_name='Картинка 17 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_17 = models.CharField(verbose_name='Описание 17 образца', max_length=250, blank=True, null=True)

    name_sample_18 = models.CharField(verbose_name='Имя 18 образца', max_length=100, blank=True, null=True)
    img_sample_18 = models.FileField(verbose_name='Картинка 18 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_18 = models.CharField(verbose_name='Описание 18 образца', max_length=250, blank=True, null=True)

    name_sample_19 = models.CharField(verbose_name='Имя 19 образца', max_length=100, blank=True, null=True)
    img_sample_19 = models.FileField(verbose_name='Картинка 19 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_19 = models.CharField(verbose_name='Описание 19 образца', max_length=250, blank=True, null=True)

    name_sample_20 = models.CharField(verbose_name='Имя 20 образца', max_length=100, blank=True, null=True)
    img_sample_20 = models.FileField(verbose_name='Картинка 20 образца', upload_to='uploads/samples', blank=True,
                                     null=True)
    desc_sample_20 = models.CharField(verbose_name='Описание 20 образца', max_length=250, blank=True, null=True)

    name_sample_21 = models.CharField(verbose_name='Имя 21 образца', max_length=100, blank=True, null=True)
    img_sample_21 = models.FileField(verbose_name='Картинка 21 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_21 = models.CharField(verbose_name='Описание 21 образца', max_length=250, blank=True, null=True)

    name_sample_22 = models.CharField(verbose_name='Имя 22 образца', max_length=100, blank=True, null=True)
    img_sample_22 = models.FileField(verbose_name='Картинка 22 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_22 = models.CharField(verbose_name='Описание 22 образца', max_length=250, blank=True, null=True)

    name_sample_23 = models.CharField(verbose_name='Имя 23 образца', max_length=100, blank=True, null=True)
    img_sample_23 = models.FileField(verbose_name='Картинка 23 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_23 = models.CharField(verbose_name='Описание 23 образца', max_length=250, blank=True, null=True)

    name_sample_24 = models.CharField(verbose_name='Имя 24 образца', max_length=100, blank=True, null=True)
    img_sample_24 = models.FileField(verbose_name='Картинка 24 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_24 = models.CharField(verbose_name='Описание 24 образца', max_length=250, blank=True, null=True)

    name_sample_25 = models.CharField(verbose_name='Имя 25 образца', max_length=100, blank=True, null=True)
    img_sample_25 = models.FileField(verbose_name='Картинка 25 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_25 = models.CharField(verbose_name='Описание 25 образца', max_length=250, blank=True, null=True)

    name_sample_26 = models.CharField(verbose_name='Имя 26 образца', max_length=100, blank=True, null=True)
    img_sample_26 = models.FileField(verbose_name='Картинка 26 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_26 = models.CharField(verbose_name='Описание 26 образца', max_length=250, blank=True, null=True)

    name_sample_27 = models.CharField(verbose_name='Имя 27 образца', max_length=100, blank=True, null=True)
    img_sample_27 = models.FileField(verbose_name='Картинка 27 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_27 = models.CharField(verbose_name='Описание 27 образца', max_length=250, blank=True, null=True)

    name_sample_28 = models.CharField(verbose_name='Имя образца', max_length=100, blank=True, null=True)
    img_sample_28 = models.FileField(verbose_name='Картинка 28 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_28 = models.CharField(verbose_name='Описание 28 образца', max_length=250, blank=True, null=True)

    name_sample_29 = models.CharField(verbose_name='Имя 29 образца', max_length=100, blank=True, null=True)
    img_sample_29 = models.FileField(verbose_name='Картинка образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_29 = models.CharField(verbose_name='Описание 29 образца', max_length=250, blank=True, null=True)

    name_sample_30 = models.CharField(verbose_name='Имя 30 образца', max_length=100, blank=True, null=True)
    img_sample_30 = models.FileField(verbose_name='Картинка 30 образца', upload_to='uploads/samples', blank=True,
                                     null=True)
    desc_sample_30 = models.CharField(verbose_name='Описание 30 образца', max_length=250, blank=True, null=True)

    name_sample_31 = models.CharField(verbose_name='Имя 31 образца', max_length=100, blank=True, null=True)
    img_sample_31 = models.FileField(verbose_name='Картинка 31 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_31 = models.CharField(verbose_name='Описание 31 образца', max_length=250, blank=True, null=True)

    name_sample_32 = models.CharField(verbose_name='Имя 32 образца', max_length=100, blank=True, null=True)
    img_sample_32 = models.FileField(verbose_name='Картинка 32 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_32 = models.CharField(verbose_name='Описание 32 образца', max_length=250, blank=True, null=True)

    name_sample_33 = models.CharField(verbose_name='Имя 33 образца', max_length=100, blank=True, null=True)
    img_sample_33 = models.FileField(verbose_name='Картинка 33 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_33 = models.CharField(verbose_name='Описание 33 образца', max_length=250, blank=True, null=True)

    name_sample_34 = models.CharField(verbose_name='Имя 34 образца', max_length=100, blank=True, null=True)
    img_sample_34 = models.FileField(verbose_name='Картинка 34 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_34 = models.CharField(verbose_name='Описание 35 образца', max_length=250, blank=True, null=True)

    name_sample_35 = models.CharField(verbose_name='Имя  35 образца', max_length=100, blank=True, null=True)
    img_sample_35 = models.FileField(verbose_name='Картинка 35 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_35 = models.CharField(verbose_name='Описание 35 образца', max_length=250, blank=True, null=True)

    name_sample_36 = models.CharField(verbose_name='Имя 36 образца', max_length=100, blank=True, null=True)
    img_sample_36 = models.FileField(verbose_name='Картинка 36 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_36 = models.CharField(verbose_name='Описание 36 образца', max_length=250, blank=True, null=True)

    name_sample_37 = models.CharField(verbose_name='Имя 37 образца', max_length=100, blank=True, null=True)
    img_sample_37 = models.FileField(verbose_name='Картинка 37 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_37 = models.CharField(verbose_name='Описание 37 образца', max_length=250, blank=True, null=True)

    name_sample_38 = models.CharField(verbose_name='Имя 38 образца', max_length=100, blank=True, null=True)
    img_sample_38 = models.FileField(verbose_name='Картинка 38 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_38 = models.CharField(verbose_name='Описание 38 образца', max_length=250, blank=True, null=True)

    name_sample_39 = models.CharField(verbose_name='Имя 39 образца', max_length=100, blank=True, null=True)
    img_sample_39 = models.FileField(verbose_name='Картинка 39 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_39 = models.CharField(verbose_name='Описание 39 образца', max_length=250, blank=True, null=True)


    name_sample_40 = models.CharField(verbose_name='Имя 40 образца', max_length=100, blank=True, null=True)
    img_sample_40 = models.FileField(verbose_name='Картинка 40 образца', upload_to='uploads/samples', blank=True,
                                     null=True)
    desc_sample_40 = models.CharField(verbose_name='Описание 40 образца', max_length=250, blank=True, null=True)

    name_sample_41 = models.CharField(verbose_name='Имя 41 образца', max_length=100, blank=True, null=True)
    img_sample_41 = models.FileField(verbose_name='Картинка 41 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_41 = models.CharField(verbose_name='Описание 41 образца', max_length=250, blank=True, null=True)

    name_sample_42 = models.CharField(verbose_name='Имя 42 образца', max_length=100, blank=True, null=True)
    img_sample_42 = models.FileField(verbose_name='Картинка 42 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_42 = models.CharField(verbose_name='Описание 42 образца', max_length=250, blank=True, null=True)

    name_sample_43 = models.CharField(verbose_name='Имя 43 образца', max_length=100, blank=True, null=True)
    img_sample_43 = models.FileField(verbose_name='Картинка 43 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_43 = models.CharField(verbose_name='Описание 43 образца', max_length=250, blank=True, null=True)

    name_sample_44 = models.CharField(verbose_name='Имя 44 образца', max_length=100, blank=True, null=True)
    img_sample_44 = models.FileField(verbose_name='Картинка 44 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_44 = models.CharField(verbose_name='Описание 44 образца', max_length=250, blank=True, null=True)

    name_sample_45 = models.CharField(verbose_name='Имя 45 образца', max_length=100, blank=True, null=True)
    img_sample_45 = models.FileField(verbose_name='Картинка 45 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_45 = models.CharField(verbose_name='Описание 45 образца', max_length=250, blank=True, null=True)

    name_sample_46 = models.CharField(verbose_name='Имя 46 образца', max_length=100, blank=True, null=True)
    img_sample_46 = models.FileField(verbose_name='Картинка 46 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_46 = models.CharField(verbose_name='Описание 46 образца', max_length=250, blank=True, null=True)

    name_sample_47 = models.CharField(verbose_name='Имя 47 образца', max_length=100, blank=True, null=True)
    img_sample_47 = models.FileField(verbose_name='Картинка 47 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_47 = models.CharField(verbose_name='Описание 47 образца', max_length=250, blank=True, null=True)

    name_sample_48 = models.CharField(verbose_name='Имя 48 образца', max_length=100, blank=True, null=True)
    img_sample_48 = models.FileField(verbose_name='Картинка 48 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_48 = models.CharField(verbose_name='Описание 48 образца', max_length=250, blank=True, null=True)

    name_sample_49 = models.CharField(verbose_name='Имя 49 образца', max_length=100, blank=True, null=True)
    img_sample_49 = models.FileField(verbose_name='Картинка 49 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_49 = models.CharField(verbose_name='Описание 49 образца', max_length=250, blank=True, null=True)

    name_sample_50 = models.CharField(verbose_name='Имя 50 образца', max_length=100, blank=True, null=True)
    img_sample_50 = models.FileField(verbose_name='Картинка 50 образца', upload_to='uploads/samples', blank=True,
                                     null=True)
    desc_sample_50 = models.CharField(verbose_name='Описание 50 образца', max_length=250, blank=True, null=True)

    name_sample_51 = models.CharField(verbose_name='Имя 51 образца', max_length=100, blank=True, null=True)
    img_sample_51 = models.FileField(verbose_name='Картинка 51 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_51 = models.CharField(verbose_name='Описание 51 образца', max_length=250, blank=True, null=True)

    name_sample_52 = models.CharField(verbose_name='Имя 52 образца', max_length=100, blank=True, null=True)
    img_sample_52 = models.FileField(verbose_name='Картинка 52 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_52 = models.CharField(verbose_name='Описание 52 образца', max_length=250, blank=True, null=True)

    name_sample_53 = models.CharField(verbose_name='Имя 53 образца', max_length=100, blank=True, null=True)
    img_sample_53 = models.FileField(verbose_name='Картинка 53 бразца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_53 = models.CharField(verbose_name='Описание 53 образца', max_length=250, blank=True, null=True)

    name_sample_54 = models.CharField(verbose_name='Имя образца', max_length=100, blank=True, null=True)
    img_sample_54 = models.FileField(verbose_name='Картинка образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_54 = models.CharField(verbose_name='Описание 54 образца', max_length=250, blank=True, null=True)

    name_sample_55 = models.CharField(verbose_name='Имя 55 образца', max_length=100, blank=True, null=True)
    img_sample_55 = models.FileField(verbose_name='Картинка 55 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    name_sample_56 = models.CharField(verbose_name='Имя 56 образца', max_length=100, blank=True, null=True)
    img_sample_56 = models.FileField(verbose_name='Картинка 56 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_56 = models.CharField(verbose_name='Описание 56 образца', max_length=250, blank=True, null=True)

    name_sample_57 = models.CharField(verbose_name='Имя 57 образца', max_length=100, blank=True, null=True)
    img_sample_57 = models.FileField(verbose_name='Картинка 57 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_57 = models.CharField(verbose_name='Описание 57 образца', max_length=250, blank=True, null=True)

    name_sample_58 = models.CharField(verbose_name='Имя 58 образца', max_length=100, blank=True, null=True)
    img_sample_58 = models.FileField(verbose_name='Картинка 58 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_58 = models.CharField(verbose_name='Описание 58 образца', max_length=250, blank=True, null=True)

    name_sample_59 = models.CharField(verbose_name='Имя 59 образца', max_length=100, blank=True, null=True)
    img_sample_59 = models.FileField(verbose_name='Картинка 59 образца', upload_to='uploads/samples', blank=True,
                                    null=True)
    desc_sample_59 = models.CharField(verbose_name='Описание 59 образца', max_length=250, blank=True, null=True)

    name_sample_60 = models.CharField(verbose_name='Имя 60 образца', max_length=100, blank=True, null=True)
    img_sample_60 = models.FileField(verbose_name='Картинка 60 образца', upload_to='uploads/samples', blank=True,
                                     null=True)
    desc_sample_60 = models.CharField(verbose_name='Описание 60 образца', max_length=250, blank=True, null=True)

    category = models.ForeignKey(
        Category,
        blank=True,
        null=True,
        verbose_name='Категория, которой принадлежит коллекция'
    )
    firm = models.ForeignKey(
        Firm,
        blank=True,
        null=True,
        verbose_name='Фирма, которой принадлежит коллекция'
    )

    def write(self):
        self.save()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Коллекция'
        verbose_name_plural = 'Коллекции'