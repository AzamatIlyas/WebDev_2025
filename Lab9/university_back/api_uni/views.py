from django.shortcuts import render
from rest_framework import generics
from .models import University, Internship
from .serializers import UniversitySerializer, InternshipSerializer

# Create your views here.
class UniversityList(generics.ListCreateAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = University.objects.all()
    serializer_class = UniversitySerializer

class UniversityInternships(generics.ListAPIView):
    serializer_class = InternshipSerializer

    def get_queryset(self):
        university_id = self.kwargs['pk']
        return Internship.objects.filter(university_id=university_id)

class InternshipList(generics.ListCreateAPIView):
    queryset = Internship.objects.all()
    serializer_class = InternshipSerializer

class InternshipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Internship.objects.all()
    serializer_class = InternshipSerializer

class InternshipTopTen(generics.ListAPIView):
    serializer_class = InternshipSerializer

    def get_queryset(self):
        return Internship.objects.order_by('-salary').all()[:10]