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
