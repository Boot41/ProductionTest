from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'title', 'description', 'employer', 'posted_date', 'is_active', 'location', 'job_type', 'keywords']