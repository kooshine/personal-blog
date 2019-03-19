from django.shortcuts import render
from django.shortcuts import redirect

from django.views.generic.base import View
from django.http import HttpResponse
import json
from haystack.query import SearchQuerySet

# Create your views here.
class SearchView(View):
    def get(self, request):
        if request.GET.get("item") is not None:
            #搜索内容
            data = request.GET.get('item')
            print (data)
            #进行搜索
            all_results = SearchQuerySet().all()
            print (len(all_results))
            #返回结果页面
            return render(request,'index.html')
        else:
            return render(request, 'search.html')

class ShowQuery(View):
    def get(self, request):
        item = request.GET['item']
        print (item)
        print ("HELLO")
        return render(request, "index.html")