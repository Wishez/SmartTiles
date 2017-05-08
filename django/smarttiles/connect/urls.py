# -*- coding: utf-8 -*-
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.contacts, name='contacts'),
    url(r'^success/$', views.success, name='success'),
]