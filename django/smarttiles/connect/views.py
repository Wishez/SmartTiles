# -*- encoding: utf-8 -*-
from django.shortcuts import render, redirect
from django.core.mail import send_mail

from .forms import CustomerForm
from home.forms import SearchForm
# Create your views here.

def contacts(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            customer = form.save(commit=False)
            customer.save()
            customer_message = request.POST['name'] + '\n' + request.POST['email'] + '\n' + request.POST['phone'] + '\n' + request.POST['message']

            send_mail('А вот и клиент!', customer_message , 'comandos.testing@list.ru', ['shiningfinger@list.ru'])
            return redirect('/connect/success/')

    form = CustomerForm()
    search_form = SearchForm()

    return render(
        request,
        'contacts-snippet.html',
        {
            'form': form,
            'searchForm': search_form
        })


def success(request):
    search_form = SearchForm()
    return render(request, 'success.html', {
        'searchForm': search_form
    })