from django.urls import path
from .views import (UniversityList, UniversityDetail, UniversityInternships,
                    InternshipList, InternshipDetail, InternshipTopTen)

urlpatterns = [
    path('universities/', UniversityList.as_view(), name='university-list'),
    path('universities/<int:pk>/', UniversityDetail.as_view(), name='university-detail'),
    path('universities/<int:pk>/internships/', UniversityInternships.as_view(), name='universities-internship'),
    path('internships/', InternshipList.as_view(), name='internships-list'),
    path('internships/<int:pk>/', InternshipDetail.as_view(), name='internships-detail'),
    path('internships/top_ten/', InternshipTopTen.as_view(), name='internships-top-ten'),
]