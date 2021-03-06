# Generated by Django 2.1.7 on 2019-03-13 02:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='article_lists',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('abstract', models.TextField()),
                ('content', models.TextField()),
                ('time', models.DateField()),
                ('image', models.ImageField(upload_to='')),
            ],
            options={
                'verbose_name': '文章内容',
            },
        ),
    ]
