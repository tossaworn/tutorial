from django.urls import path
from .api import create, delete, read, test, update

urlpatterns = [
    path('test', test),
    path('create', create),
    path('read', read),
    path('update', update),
    path('del', delete),
]
