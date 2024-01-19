from django.http import JsonResponse

def home(request):
    return JsonResponse(
        {
            'message': 'Isso está sendo gerado automaticamente pela API do Django'
        },
        status=200
    )
