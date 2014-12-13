__author__ = 'sergii'
from django.conf.urls import patterns, url

from main import views

urlpatterns = patterns('',
     # ex: /polls/
    #url(r'^$', views.index, name='index'),
    url(r'^services/$', views.services, name='services'),
    url(r'^staff/$', views.staff, name='staff'),
    url(r'^about/$', views.about, name='about'),
    url(r'^secrets/$', views.secrets, name='secrets'),
    url(r'^promo/$', views.promo, name='promo'),
    url(r'^get_work/$', views.get_work, name='get_work'),
    url(r'^get_promo/$', views.get_promo, name='get_promo'),
    url(r'^get_secret/$', views.get_secret, name='get_secret'),
    url(r'^search/$', views.search, name='search'),
)