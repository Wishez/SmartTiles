# -*- coding: utf-8 -*-
from django import forms

class SearchForm(forms.Form):
    search = forms.CharField(
        max_length=100,
        widget=forms.TextInput(
            attrs={
                'class': 'searchForm__inputSearch typeahead',
                'type': 'search',
                'placeholder': 'Категории, фирмы, коллекции'
            }
        ))