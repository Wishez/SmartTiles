# -*- coding: utf-8 -*-
"""smarttiles URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    url(r'', include('home.urls')),
    url(r'^connect/', include('connect.urls')),
    url(r'^projects/', include('projects.urls')),
    url(r'^catalog/', include('catalog.urls')),
    url(r'^service/', include('service.urls')),
    url(r'^admin/', admin.site.urls),
    url(r'^api/v0/', include('api_v0.urls'))
]
