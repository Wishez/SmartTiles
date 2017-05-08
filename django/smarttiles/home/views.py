# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from connect.forms import CustomerForm
from django.core.mail import send_mail
from .forms import SearchForm
from django.contrib.postgres.search import SearchVector
from catalog.models import *
from .models import Slider

# Create your views here.

def index(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            customer = form.save(commit=False)
            customer.save()
            customer_message = request.POST['name'] + '\n' + request.POST['email'] + '\n' + request.POST['phone'] + '\n' + request.POST['message']

            send_mail('А вот и клиент!', customer_message, 'comandos.testing@list.ru', ['shiningfinger@list.ru'])
            return redirect('/connect/success/')
    form = CustomerForm()
    search_form = SearchForm()
    slider = Slider.objects.get(pk='1')
    if slider.slide_1:
        print(True)

    return render(request, 'index.html',
          {
              'form': form,
              'searchForm': search_form,
              'slider': slider
          })

def search(request):
    if request.method == 'GET':
        search_form = SearchForm(request.GET)
        if search_form.is_valid():
            value = request.GET['search']
            print(value, 'It is.')
            categories = Category.objects.annotate(
                search=SearchVector('name', 'desc')).filter(
                search=value
            )
            firms = Firm.objects.annotate(
                search=SearchVector('name', 'desc')).filter(
                search=value
            )
            collections = Collection.objects.annotate(
                search=SearchVector('name', 'desc')).filter(
                search=value
            )
            search_form = SearchForm()
            return render(request, 'result_search.html', {
                'categories': categories,
                'firms': firms,
                'collections': collections,
                'value': value,
                'searchForm': search_form
            })
    return redirect('/')

def page_not_found(request):
    response.status_code = 404
    search_form = SearchForm()

    return render(request, '404.html', {
        'searchForm': search_form
    })


