# -*- coding: utf-8 -*-
from django.conf.urls import url

from . import views

urlpatterns = [
    url('^$', views.catalog, name='catalog'),
    url('^category/(?P<pk>[0-9]+)/$', views.category_detail, name='category_detail'),
    url('^firm/(?P<pk>[0-9]+)/$', views.firm_detail, name='firm_detail'),
    url('^collection/(?P<pk>[0-9]+)/$', views.collection_detail, name='collection_detail'),
    url('^categories/(?P<pk>[A-Z]{2})/$', views.type_categories, name='type_categories'),
]