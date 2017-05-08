# -*- encoding: utf-8 -*-
from django.contrib import admin

from .models import Category, Firm, Collection
# Register your models here.

admin.site.register(Category)
admin.site.register(Firm)
admin.site.register(Collection)
