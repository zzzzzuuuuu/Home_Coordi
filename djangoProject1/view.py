from django.shortcuts import render
from rest_framework.views import APIView


def get(request):
    print("겟으로 호출")
    return render(request, "housecordi/main.html")


def post(request):
    print("포스트로 호출")
    return render(request, "housecordi/main.html")


class Sub(APIView):
    pass
