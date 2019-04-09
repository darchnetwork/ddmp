"""ddmp URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
import core.views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^$', core.views.landing, name='landing'),
    url(r'^register/$', core.views.register, name='register'),
    url(r'^login/$', core.views.login, name='login'),

    url(r'^new/$', core.views.new, name='new'),
    url(r'^profile/$', core.views.profile, name='profile'),


    url(r'^generate/$', core.views.generate, name='generate'),
    url(r'^encryption/$', core.views.encryption, name='encryption'),
    url(r'^decryption/$', core.views.decryption, name='decryption'),
    url(r'^encpost/$', core.views.encpost, name='encpost'),
    url(r'^depost/$', core.views.depost, name='depost'),
    url(r'^regmeinplease/$', core.views.regmeinplease, name='regmeinplease'),
    url(r'^checklogin/$', core.views.checklogin, name='checklogin'),
    url(r'^logout/$', core.views.logout, name='logout'),
    url(r'^manage/(?P<itemname>\w+)/$', core.views.showrequests, name='showrequests'),

    url(r'^(?P<itemname>\w+)/$', core.views.item, name='item'),


]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
