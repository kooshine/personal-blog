# Generated by Django 2.1.7 on 2019-03-14 09:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0004_auto_20190314_1722'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article_lists',
            name='image',
            field=models.ImageField(blank=True, help_text='大图833*217，小图243*207', null=True, upload_to='article/image/%y/%m', verbose_name='封面图'),
        ),
    ]
