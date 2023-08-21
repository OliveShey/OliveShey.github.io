"""djangoProject01 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from app01 import views
urlpatterns = [
    # www.xxx.com/index/   -> 函数
    path('page01_income_min_max/', views.page01_income_min_max),
    path('page02_Chongqing_position_wordcloud/', views.page02_Chongqing_position_wordcloud),
    path('page03_Hebei_position_wordcloud', views.page03_Hebei_position_wordcloud),
    path('page04_bmi', views.page04_bmi),
    path('page05_test_img', views.page05_test_img)
    # path('admin/', admin.site.urls),
]
