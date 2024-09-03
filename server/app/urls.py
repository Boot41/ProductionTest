from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JobViewSet

router = DefaultRouter()
router.register(r'jobs', JobViewSet, basename='job')

urlpatterns = [
    path('employers/<int:employer_id>/', include(router.urls)),
    path('jobs/search/', JobViewSet.as_view({'get': 'search'}), name='job-search'),
    path('jobs/<int:job_id>/', JobViewSet.as_view({'get': 'retrieve'}), name='job-detail'),
]