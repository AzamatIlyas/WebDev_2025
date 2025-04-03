from django.urls import path
from .views import ( CompanyListView, CompanyDetailView, CompanyVacanciesView,
                     VacancyListView, VacancyDetailView, VacancyTopTenView )

urlpatterns = [
    path('companies/', CompanyListView.as_view(), name='company-list'),
    path('companies/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
    path('companies/<int:pk>/vacancies/', CompanyVacanciesView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListView.as_view(), name='vacancy-list'),
    path('vacancies/<int:pk>/', VacancyDetailView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTenView.as_view(), name='vacancy-top-ten'),
]