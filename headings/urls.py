from django.urls import path

from . import views

urlpatterns = [
    path('', views.headings_view, name='headings'),
]