from django.shortcuts import render

from home.forms import SearchForm
# Create your views here.


def service(request):
    search_form = SearchForm()

    return render(
        request,
        'service-snippet.html',
        {
            'searchForm': search_form
        }
    )