# -*- coding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.http import JsonResponse
import json


from django.utils.encoding import python_2_unicode_compatible

@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField(verbose_name='Полное имя категории', max_length=20)
    short_name = models.CharField(verbose_name='Короткое имя категории', max_length=8)
    desc = models.CharField(verbose_name='Описание категории', max_length=250, null=True, blank=True)
    img = models.FileField(verbose_name='Картинка категории', upload_to='uploads/categories')

    def write(self):
        cat = {
            'name': self.name,
            'short_name': self.short_name,
            'desc': self.desc
        }
        output = open('../media/smarttiles/data/some-data.json', 'wb')
        json.dump(cat ,output, 2)
        output.close()

        self.save()
    def __str__(self):
        return self.name

#@python_2_unicode_compatible
#class Firm(models.Model):
#@python_2_unicode_compatible
#class Collection(models.Model):
#@python_2_unicode_compatible
#class Samples(models.Model):
#@python_2_unicode_compatible
#class Project(models.Model):

