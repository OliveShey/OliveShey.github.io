from django.shortcuts import render, HttpResponse

# Create your views here.


def page01_income_min_max(request):
    return render(request, "income_min&max.html")


def page02_Chongqing_position_wordcloud(request):
    return render(request, "Chongqing_position_wordcloud.html")

def page03_Hebei_position_wordcloud(request):
    return render(request, "Hebei_position_wordcloud.html")

def page04_bmi(request):
    return render(request, "bmi.html")


def page05_test_img(request):
    return render(request, "test_img.html")