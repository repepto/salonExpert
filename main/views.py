from django.shortcuts import render
from main.models import Staff
from main.models import Service
from main.models import Secret
from main.models import Promo
from main.models import About
#from main.models import Work
from django.http import HttpResponse
import watson
import json
import re

# Create your views here.


def staff(request):
    staffList = Staff.objects.all()
    context = {'staffList':staffList,}
    return render(request, 'main/staff.html', context)


def services(request):
    servListT = Service.objects.all()

    servs=[]

    for service in servListT:

        workT=[]
        serv=[]
        serv.append([service.header,service.description,service.id,])

        for work in service.work_set.all():
            workT.append([work.photo_preview.url, work.id, service.id,])

        serv.append(workT)
        servs.append(serv)


    context = {'servList':servs}
    return render(request, 'main/services.html', context)

def get_work(request):

    srv = Service.objects.get(id=request.GET.get('s_id'))
    work = srv.work_set.get(id=request.GET.get('w_id'))

    h='<h1 style="display:inline">' + work.header + '</h1>'
    d=work.description
    p=work.photo.url

    results = {'h':h, 'd':d, 'p':p}

    answer = json.dumps(results)
    return HttpResponse(answer, content_type="application/json")


def search(request):
    p = re.compile(r'<img.*?>')
    search_results = watson.search(request.GET.get('searchText'))

    for ind in range(0,len(search_results)):
        if(search_results[ind].meta == 'work'):
            search_results[ind].content = search_results[ind].content.split(',')

        ts=p.sub('',search_results[ind].description)[:500]
        ts=ts[:ts.rfind(" ")]
        if(ts.rfind("<a") != -1):
            if(ts.rfind("</a>") == -1 or ts.rfind("<a") > ts.rfind("</a>")):
                ts=ts[:ts.rfind("<a")]
        ts+="..."
        if(ts[:2]!='<p'):
            ts='<p>'+ts+'</p>'
        search_results[ind].description=ts

    context = {'search_results':search_results}
    return render(request, 'main/search.html', context)

def getSections(Obj, num=0):

    if(num!=0):
        sList = Obj.objects.all()[:num]
    else:
        sList = Obj.objects.all()

    sL=[]

    p = re.compile(r'<img.*?>')
    #p1 = re.compile(r'<p></p>')

    for s in sList:
        ts=p.sub('',s.description)[:500]
        #ts=p1.sub('',ts)
        ts=ts[:ts.rfind(" ")]
        if(ts.rfind("<a") != -1):
            if(ts.rfind("</a>") == -1 or ts.rfind("<a") > ts.rfind("</a>")):
                ts=ts[:ts.rfind("<a")]

        ts+="..."
        s.description=ts
        sL.append((s.header,s.description,s.id))


    #return {'sL':sL}
    return sL

def about(request):
    context2 = getSections(Secret, 2)
    context1 = getSections(Promo, 2)
    ab = About.objects.all()
    context=(ab,context1,context2)
    context={'sL':context}

    return render(request, 'main/about.html', context)

def secrets(request):
    context = {'sL':getSections(Secret)}
    return render(request, 'main/secrets.html', context)

def promo(request):
    context = {'sL':getSections(Promo)}
    return render(request, 'main/promo.html', context)

def contacts(request):
    return render(request, 'main/contacts.html')


def get_secret(request):
    answer = getSection(Secret,request.GET.get('s_id'))
    return HttpResponse(answer, content_type="application/json")

def get_promo(request):
    answer = getSection(Promo,request.GET.get('s_id'))
    return HttpResponse(answer, content_type="application/json")

def get_staff(request):

    stf = Staff.objects.get(id=request.GET.get('s_id'))
    h='<h1 style="display:inline; position:relative; top:-7px">' + stf.name + '</h1><span style = "position:absolute; top:15px; left:0">' + stf.occupation + '</span>'
    d=stf.description
    p=stf.photo.url
    answer = json.dumps({'h':h, 'd':d, 'p':p})
    return HttpResponse(answer, content_type="application/json")

def getSection(Obj,id_):
    srv = Obj.objects.get(id=id_)
    h='<h1 style="display:inline">' + srv.header + '</h1>'
    d=str(srv.description)
    return json.dumps({'h':h, 'd':d})