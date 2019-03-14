from django.contrib import admin

# Register your models here.
from .models import article_lists

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'time')

admin.site.register(article_lists, ArticleAdmin)