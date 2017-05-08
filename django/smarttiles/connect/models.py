# -*- encoding: utf-8 -*-
from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
# Create your models here.

@python_2_unicode_compatible
class Customer(models.Model):
    name = models.CharField(max_length=36, verbose_name='Имя')
    email = models.EmailField(max_length=100, verbose_name='E-mail')
    phone = models.CharField(max_length=24, verbose_name='Номер телефона', null=True, blank=True)
    message = models.TextField(verbose_name='Сообщения')
    connected_date = models.DateTimeField(verbose_name='Дата, когда клиент пытался связаться связаться', default=timezone.now)

    def connect(self):
        self.save()

    def __str__(self):
        return self.name + '|' + self.connected_date

    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'
