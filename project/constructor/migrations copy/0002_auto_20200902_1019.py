# Generated by Django 3.0 on 2020-09-02 10:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        # ('constructor', '0001_initial'),
        # ('sw_catalog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='frametype',
            name='item',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='sw_catalog.Item', verbose_name='Товар'),
        ),
        migrations.AddField(
            model_name='framecolor',
            name='frame',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='constructor.FrameType', verbose_name='Рама'),
        ),
        migrations.AddField(
            model_name='constructorform',
            name='values',
            field=models.ManyToManyField(blank=True, to='constructor.Value', verbose_name='Вибрані елементи'),
        ),
        migrations.AlterUniqueTogether(
            name='value',
            unique_together={('code', 'parameter')},
        ),
        migrations.AlterUniqueTogether(
            name='relationship',
            unique_together={('parent', 'children')},
        ),
        migrations.AlterUniqueTogether(
            name='parameter',
            unique_together={('code', 'tab_group')},
        ),
    ]