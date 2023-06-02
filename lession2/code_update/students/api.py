from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Student

@api_view(['GET','POST'])
def test(request):
    return Response({'message':'test.'}, status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def create(request):
    obj = Student()
    obj.name = request.data['name']
    obj.age = request.data['age']
    obj.save()

    return Response({'message':'successful.'}, status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def read(request):
    queryset = Student.objects.all()
    queryset_list = list(queryset.values())
    return Response(queryset_list, status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def update(request):
    obj = Student.objects.get(pk=request.data['id'])
    obj.name = request.data['name']
    obj.age = request.data['age']
    obj.save()
    return Response({'message':'successful.'}, status=status.HTTP_200_OK)

@api_view(['GET','POST'])
def delete(request):
    obj = Student.objects.get(pk=request.data['id'])
    obj.delete()
    return Response({'message':'successful.'}, status=status.HTTP_200_OK)