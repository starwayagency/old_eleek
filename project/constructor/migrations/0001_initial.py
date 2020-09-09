# Generated by Django 3.0.4 on 2020-09-09 15:43

import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ConstructorForm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Імя')),
                ('email', models.CharField(blank=True, max_length=255, null=True, verbose_name='Емейл')),
                ('tel', models.CharField(blank=True, max_length=255, null=True, verbose_name='Телефон')),
                ('message', models.TextField(blank=True, null=True, verbose_name='Повідомлення')),
            ],
            options={
                'verbose_name': 'Заявка з конструктора',
                'verbose_name_plural': 'Заявки з конструктора',
            },
        ),
        migrations.CreateModel(
            name='FrameColor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('code', models.SlugField(blank=True, max_length=255, null=True, verbose_name='Код')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Зображення')),
                ('price', models.FloatField(blank=True, default=0, null=True, verbose_name='Ціна')),
                ('color', colorfield.fields.ColorField(blank=True, default=None, max_length=18, null=True, verbose_name='Колір')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
            ],
            options={
                'verbose_name': 'Колір рами',
                'verbose_name_plural': 'Кольори рами',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='FrameType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('code', models.SlugField(blank=True, max_length=255, null=True, verbose_name='Код')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Зображення')),
                ('price', models.FloatField(blank=True, default=0, null=True, verbose_name='Ціна')),
                ('color', colorfield.fields.ColorField(blank=True, default=None, max_length=18, null=True, verbose_name='Колір')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
            ],
            options={
                'verbose_name': 'Тип рами',
                'verbose_name_plural': 'Типи рами',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Parameter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('code', models.SlugField(blank=True, max_length=255, null=True, verbose_name='Код')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
                ('type', models.CharField(blank=True, choices=[('radio_small', 'Одиночний вибір'), ('radio_color', 'Колір'), ('radio_img', 'Одиночний вибір з зображенням'), ('checkbox_options', 'Вибір чекбоксом')], max_length=30, null=True, verbose_name='Тип')),
            ],
            options={
                'verbose_name': 'Параметер групи',
                'verbose_name_plural': 'Параметри групи',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Relationship',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Звязок між елементами',
                'verbose_name_plural': 'Звязки між елементами',
            },
        ),
        migrations.CreateModel(
            name='Tab',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('code', models.SlugField(blank=True, max_length=255, null=True, verbose_name='Код')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Зображення')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
                ('description', models.TextField(verbose_name='Опис')),
                ('description_uk', models.TextField(null=True, verbose_name='Опис')),
                ('description_en', models.TextField(null=True, verbose_name='Опис')),
                ('description_ru', models.TextField(null=True, verbose_name='Опис')),
            ],
            options={
                'verbose_name': 'Вкладка',
                'verbose_name_plural': 'Вкладки',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='TabGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
                ('type', models.CharField(blank=True, choices=[('checkbox_options', 'Вибір чекбоксом')], max_length=30, null=True, verbose_name='Тип')),
            ],
            options={
                'verbose_name': 'Група',
                'verbose_name_plural': 'Групи',
                'ordering': ['order'],
            },
        ),
        migrations.CreateModel(
            name='Value',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True, verbose_name='Активність')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='Створено')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Оновлено')),
                ('code', models.SlugField(blank=True, max_length=255, null=True, verbose_name='Код')),
                ('name', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_uk', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_en', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('name_ru', models.CharField(blank=True, max_length=255, null=True, verbose_name='Назва')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Зображення')),
                ('price', models.FloatField(blank=True, default=0, null=True, verbose_name='Ціна')),
                ('color', colorfield.fields.ColorField(blank=True, default=None, max_length=18, null=True, verbose_name='Колір')),
                ('order', models.IntegerField(default=0, verbose_name='Порядок')),
            ],
            options={
                'verbose_name': 'Значення параметра',
                'verbose_name_plural': 'Значення параметра',
                'ordering': ['order'],
            },
        ),
    ]
