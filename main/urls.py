__author__ = 'sergii'
from django.conf.urls import patterns, url

from main import views

urlpatterns = patterns('',
     # ex: /polls/
    #url(r'^$', views.index, name='index'),
    url(r'^services/$', views.services, name='services'),
    url(r'^staff/$', views.staff, name='staff'),
)