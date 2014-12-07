from django.shortcuts import render
from main.models import Staff
from main.models import Service
from main.models import Work
from django.http import HttpResponse
import json

# Create your views here.


def staff(request):
    staffList = Staff.objects.all()
    context = {'staffList':staffList,}
    return render(request, 'main/staff.html', context)

def about(request):
    ab = 11
    context = {'staffList':ab,}
    return render(request, 'main/about.html', context)


def services(request):
    servListT = Service.objects.all()

    servs=[]
    serv=[]
    workT=[]

    for service in servListT:

        serv.append(service.header)
        serv.append(service.description)

        for work in service.work_set.all():
            workT.append([work.photo_preview.url, work.id, service.id])

        serv.append(workT)
        servs.append(serv)


    context = {'servList':servs}
    return render(request, 'main/services.html', context)

def get_work(request):

    if request.GET.get('param1'):
        message = request.GET.get('param1')

    srv = Service.objects.get(id=request.GET.get('s_id'))
    work = srv.work_set.get(id=request.GET.get('w_id'))

    h=work.header
    d=work.description
    p=work.photo.url

    #results = {'param1':request.GET.get('param1'), 'param2':'натиснув його!'}
    results = {'h':h, 'd':d, 'p':p}
    #results = {'param1':'aaa', 'param2':'натиснув його!'}

    answer = json.dumps(results)
    return HttpResponse(answer, content_type="application/json")