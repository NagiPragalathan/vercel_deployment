# example/urls.py
from django.urls import path

from example.views import index, home

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', index),
    path('home', home,name="home"),
]


urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)