from django.conf.urls import patterns, include, url
from django.contrib import admin
from salonExpert import settings
from django.conf.urls.static import static

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'salonExpert.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^main/', include('main.urls')),
    url(r'^redactor/', include('redactor.urls')),
    url(r'^admin/', include(admin.site.urls)),

    (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
) #+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


#if settings.DEBUG:
    #urlpatterns += patterns('',(r'^' + settings.MEDIA_URL.lstrip('/'), 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}))