from rest_framework import viewsets
from escola.models import Aluno
from escola.serializer import AlunoSerializer

class AlunoViewSet(viewsets.ModelViewSet):
    queryset = Aluno.objects.all() #? queryset é o conjunto de objetos que queremos exibir
    serializer_class = AlunoSerializer


