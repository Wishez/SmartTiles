# -*- encoding: utf-8 -*-
from django.shortcuts import render, get_object_or_404

from .models import Project
from home.forms import SearchForm
# Create your views here.

def projects(request):
    projects = Project.objects.order_by('name')
    search_form = SearchForm()

    return render(
        request,
        'projects.html',
        {
            'projects': projects,
            'searchForm': search_form
        })

def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    search_form = SearchForm()

    return render(
       request,
       'project_detail.html',
       {
           'project': project,
           'searchForm': search_form
       })