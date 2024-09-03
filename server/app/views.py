from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Job
from .serializers import JobSerializer

class JobViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save() 
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self, request, employer_id):
        jobs = Job.objects.filter(employer_id=employer_id)
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)

    def search(self, request):
        keywords = request.query_params.get('keywords', None)
        location = request.query_params.get('location', None)
        job_type = request.query_params.get('job_type', None)
        filters = {}

        if keywords:
            filters['keywords__icontains'] = keywords
        if location:
            filters['location__icontains'] = location
        if job_type:
            filters['job_type'] = job_type

        jobs = Job.objects.filter(**filters)
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)

    def retrieve(self, request, job_id=None):
        try:
            job = Job.objects.get(id=job_id)
            serializer = JobSerializer(job)
            return Response(serializer.data)
        except Job.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)