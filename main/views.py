from django.shortcuts import render
from django.shortcuts import redirect

from django.views.generic.base import View
import json
from django.forms.models import model_to_dict

from django.core import serializers
from django.http import HttpResponse
#测试添加数据库
from .models import article_lists

# Create your views here.
class MainView(View):
    def get(self, request):
        flag = 0
        if request.is_ajax():   
            #加载更多,加载全部
            articles = article_lists.objects.all()
            flag = 1
        else:       
            #每次打开页面，显示前四篇文章
            articles = article_lists.objects.all()[:4]
        
        data = []
        for item in articles:
            dic = {}
            dic['id'] = item.id
            dic['title'] = item.title
            dic['author'] = item.author
            dic['author_link'] = item.author_link
            dic['abstract'] = item.abstract[:100]
            #dic['content'] = item.content
            dic['time'] = str(item.time)        #time and img Object of type date is not JSON serializable
            #dic['img'] = item.image.url
            data.append(dic)
        print (data)
        if flag == 1:
            return HttpResponse(json.dumps(data))
        else:
            return render(request,'index.html',{'data':json.dumps(data)})


class DetailView(View):
    def get(self, request, article_id):
        item = article_lists.objects.filter(id=article_id)[0]
        print (item)
        dic = {}
        dic['id'] = item.id
        dic['title'] = item.title
        dic['author'] = item.author
        dic['author_link'] = item.author_link
        dic['abstract'] = item.abstract[:100]
        dic['content'] = item.content
        dic['time'] = str(item.time)        #time and img Object of type date is not JSON serializable
        dic['img'] = item.image.url
        return render(request,'detail.html',{'data':json.dumps(dic)})

    def post(self,request):
        pass