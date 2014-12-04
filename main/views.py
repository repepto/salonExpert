from django.shortcuts import render
from main.models import Staff
from main.models import Service
from django.http import HttpResponse
import json

# Create your views here.


def staff(request):
    staffList = Staff.objects.all()
    context = {'staffList':staffList,}
    return render(request, 'main/staff.html', context)


def services(request):
    servList = Service.objects.all()
    context = {'servList':servList}
    return render(request, 'main/services.html', context)

def get_workt(request):
    results = {'success':False}

    # Тут — потрібні нам алгоритми
    if True:
        results = {'success':True, 'param1':'Ти таки', 'param2':'натиснув його!'}

    answer = json.dumps(results)
    return HttpResponse(answer, mimetype='application/json')