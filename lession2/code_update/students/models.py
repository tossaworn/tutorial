from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=300)
    age = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "students"