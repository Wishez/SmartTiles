# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect

from . import models

# Create your views here.

def index(request):
    return render(request, 'index.html', {})