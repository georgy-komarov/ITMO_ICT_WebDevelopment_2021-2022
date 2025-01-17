# Generated by Django 3.2.11 on 2022-01-23 03:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('receipts', '0002_alter_receiptitem_receipt'),
    ]

    operations = [
        migrations.AddField(
            model_name='receipt',
            name='users',
            field=models.ManyToManyField(related_name='receipts', to=settings.AUTH_USER_MODEL, verbose_name='Пользователи'),
        ),
        migrations.CreateModel(
            name='ReceiptItemPart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('part', models.DecimalField(decimal_places=10, max_digits=15, verbose_name='Количество')),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='receipts.receiptitem', verbose_name='Товар')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
            options={
                'verbose_name': 'Товар - пользователь: количество',
                'verbose_name_plural': 'Товары - пользователи: количество',
            },
        ),
        migrations.AddField(
            model_name='receiptitem',
            name='parts',
            field=models.ManyToManyField(through='receipts.ReceiptItemPart', to=settings.AUTH_USER_MODEL, verbose_name='Пользователи'),
        ),
        migrations.AddConstraint(
            model_name='receiptitempart',
            constraint=models.UniqueConstraint(fields=('user', 'item'), name='uq_user_item'),
        ),
    ]
