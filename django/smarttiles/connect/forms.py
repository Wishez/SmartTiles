# -*- encoding: utf-8 -*-
from django import forms

from .models import Customer

class CustomerForm(forms.ModelForm):

    class Meta:
        model = Customer
        fields = ('name','email', 'phone', 'message',)
        widgets = {
            'name': forms.TextInput(
                attrs={
                    'placeholder': 'Имя',
                    'pattern': '\D+',
                    'class': 'controller__input',
                    'maxlength': '24',
                    'minlength': '1',
            }),
            'email': forms.EmailInput(
                attrs={
                    'placeholder': 'E-mail',
                    'class': 'controller__input',
                    'maxlength': '90',
                    'minlength': '10'
            }),
            'phone': forms.TextInput(
                attrs={
                    'placeholder': 'Номер телефона',
                    'type': 'tel',
                    'class': 'controller__input'
            }),
            'message': forms.Textarea(
                attrs={
                    'placeholder': 'Сообщение',
                    'row': '3',
                    'maxlength': '300',
                    'class': 'controller__input controller__input-textarea'
            })
        }