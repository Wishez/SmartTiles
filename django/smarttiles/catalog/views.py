# -*- encoding: utf-8 -*-
from django.shortcuts import render, get_object_or_404

from .models import Category, Firm, Collection
from home.forms import SearchForm

# Create your views here.

def catalog(request):
    categories = Category.objects.order_by('name')
    firms = Firm.objects.order_by('name')
    search_form = SearchForm()

    return render(
        request
        , 'catalog-snippet.html',
        {
           'categories': categories,
           'firms': firms,
           'searchForm': search_form
        }
    )

def category_detail(request, pk):
    category = get_object_or_404(Category, pk=pk)

    firms = Firm.objects.filter(category=category).order_by('name')

    search_form = SearchForm()

    return render(
        request,
        'category_detail.html',
        {
            'category_name': category.name,
            'firms': firms,
            'searchForm': search_form
        }
    )

def firm_detail(request, pk):
    firm = get_object_or_404(Firm, pk=pk)

    collections = Collection.objects.filter(firm=firm).order_by('name')

    search_form = SearchForm()

    return render(
        request,
        'firm_detail.html',
        {
          'collections': collections,
          'firm': firm,
          'searchForm': search_form
        }
    )

def collection_detail(request, pk):
    collection = get_object_or_404(Collection, pk=pk)

    search_form = SearchForm()

    return render(
        request,
        'collection_detail.html',
        {
            'collection': collection,
            'searchForm': search_form
        }
    )

types = {
  'CC': 'Напольные покрытия',
  'CS': 'Потолочные системы',
  'WC': 'Настенные покрытия',
  'TT': 'Текстиль'
}

def type_categories(request, pk):
    categories = Category.objects.filter(type=pk).order_by('name')
    name = types[pk]

    search_form = SearchForm()

    return render(
        request,
        'home_categories.html',
        {
            'categories': categories,
            'name': name,
            'searchForm': search_form
        })