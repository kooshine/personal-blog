from django.db import models
from blog.settings import STATICFILES_DIRS

# Create your models here.
class article_lists(models.Model):
    #id = models.AutoField()                     #唯一ID
    title = models.CharField(max_length=100)    #标题
    author = models.CharField(max_length=100)   #作者
    author_link = models.URLField(default="https://github.com/kooshine")
    abstract = models.TextField()   #文章摘要
    content = models.TextField()    #文章内容
    time = models.DateField()       #文章收录时间
    image = models.ImageField(upload_to="article/image/%y/%m", null=True, blank=True, verbose_name="封面图",
                                   help_text="大图833*217，小图243*207")     #文章内图片
    class Meta:
        verbose_name = "文章内容"
