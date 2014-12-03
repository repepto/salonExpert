from django.shortcuts import render
from main.models import Staff
from main.models import Service
from django.http import HttpResponse

# Create your views here.


def staff(request):
    staffList = Staff.objects.all()
    context = {'staffList':staffList,}
    return render(request, 'main/staff.html', context)


def services(request):
    servList = Service.objects.all()
    context = {'servList':servList}
    return render(request, 'main/services.html', context)