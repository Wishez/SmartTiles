# -*- coding: utf-8 -*-
from django.db import models
from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Slider(models.Model):
    slide_1 = models.FileField(upload_to='uploads/slider/', verbose_name='1й слайд')
    slide_2 = models.FileField(upload_to='uploads/slider/', verbose_name='2й слайд')
    slide_3 = models.FileField(upload_to='uploads/slider/', verbose_name='3й слайд')
    slide_4 = models.FileField(upload_to='uploads/slider/', verbose_name='4й слайд')
    slide_5 = models.FileField(upload_to='uploads/slider/', verbose_name='5й слайд', null=True, blank=True)
    slide_6 = models.FileField(upload_to='uploads/slider/', verbose_name='6й слайд', null=True, blank=True)
    slide_7 = models.FileField(upload_to='uploads/slider/', verbose_name='7й слайд', null=True, blank=True)
    slide_8 = models.FileField(upload_to='uploads/slider/', verbose_name='8й слайд', null=True, blank=True)
    slide_9 = models.FileField(upload_to='uploads/slider/', verbose_name='9й слайд', null=True, blank=True)
    slide_10 = models.FileField(upload_to='uploads/slider/', verbose_name='10й слайд', null=True, blank=True)
    slide_11 = models.FileField(upload_to='uploads/slider/', verbose_name='11й слайд', null=True, blank=True)
    slide_12 = models.FileField(upload_to='uploads/slider/', verbose_name='12й слайд', null=True, blank=True)

    class Meta:
        verbose_name = 'Слайдер'
        verbose_name_plural = 'Слайдеры'

    def __str__(self):
        return 'Эксклюзивные слайды'