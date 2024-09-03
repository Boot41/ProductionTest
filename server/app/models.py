from django.db import models

class Job(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    employer = models.ForeignKey('Employer', on_delete=models.CASCADE)
    posted_date = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    location = models.CharField(max_length=255)
    job_type = models.CharField(max_length=50)
    keywords = models.CharField(max_length=255)

    def __str__(self):
        return self.title