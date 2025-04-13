from django.urls import path

from .fbv import (company_list, company_detail, company_vacancies,
                  vacancy_list, vacancy_detail, top_ten_vacancies)
from .cbv import (CompanyListCreateAPIView, CompanyDetailAPIView, CompanyVacanciesAPIView,
                  VacancyListCreateAPIView, VacancyDetailAPIView, VacancyTopTenAPIView)


#Class Based View
urlpatterns = [
    path('companies/', CompanyListCreateAPIView.as_view(), name='company-list'),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view(), name='company-detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesAPIView.as_view(), name='company-vacancies'),
    path('vacancies/', VacancyListCreateAPIView.as_view(), name='vacancy-list'),
    path('vacancies/<int:vacancy_id>/', VacancyDetailAPIView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten/', VacancyTopTenAPIView.as_view(), name='vacancy-top-ten'),
]


#Function Based View
# urlpatterns = [
#     path('companies/', company_list, name='company-list'),
#     path('companies/<int:pk>/', company_detail, name='company-detail'),
#     path('companies/<int:pk>/vacancies/', company_vacancies(), name='company-vacancies'),
#     path('vacancies/', vacancy_list, name='vacancy-list'),
#     path('vacancies/<int:pk>/', vacancy_detail, name='vacancy-detail'),
#     path('vacancies/top_ten/', top_ten_vacancies(), name='vacancy-top-ten'),
# ]