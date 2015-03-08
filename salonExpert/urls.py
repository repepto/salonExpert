from django.conf.urls import patterns, include, url
from django.contrib import admin
from salonExpert import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'main.views.index', name='index'),
    url(r'^services/$', 'main.views.services', name='services'),
    url(r'^staff/$', 'main.views.staff', name='staff'),
    url(r'^about/$', 'main.views.about', name='about'),
    url(r'^secrets/$', 'main.views.secrets', name='secrets'),
    url(r'^promo/$', 'main.views.promo', name='promo'),
    url(r'^contacts/$', 'main.views.contacts', name='contacts'),
    url(r'^get_work/$', 'main.views.get_work', name='get_work'),
    url(r'^get_p/$', 'main.views.get_p', name='get_p'),
    url(r'^get_promo/$', 'main.views.get_promo', name='get_promo'),
    url(r'^get_secret/$', 'main.views.get_secret', name='get_secret'),
    url(r'^secret/(?P<sId>\d+)/$', 'main.views.secret', name='secret'),
    url(r'^get_staff/$', 'main.views.get_staff', name='get_staff'),
    url(r'^search/$', 'main.views.search', name='search'),
    # url(r'^blog/', include('blog.urls')),
    #url(r'^main/', include('main.urls')),
    url(r'^ckeditor/', include('ckeditor.urls')),
    url(r'^admin/', include(admin.site.urls)),

    (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
) #+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

#{{ cont.2 }}

#if settings.DEBUG:
    #urlpatterns += patterns('',(r'^' + settings.MEDIA_URL.lstrip('/'), 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}))