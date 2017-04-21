# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
import random

from ipsum.serializers import IpsumSerializer, ParagraphSerializer
from ipsum.models import IpsumWord, Paragraph

class IpsumViewSet(viewsets.ModelViewSet):
  queryset = IpsumWord.objects.all()
  serializer_class = IpsumSerializer

@api_view(['GET', 'POST'])
def get_ipsum(request):
  """
  """
  if request.method == 'GET':
    paragraphs = Paragraph.objects.all()
    serializer = ParagraphSerializer(paragraphs, many=True)
    return Response(serializer.data)

  elif request.method == 'POST':
    paragraph_count = request.POST.get('count', None)
    paragraph_count = int(paragraph_count)
    ids = Paragraph.objects.values_list('id', flat=True)
    rand_ids = random.sample(ids, paragraph_count)
    random_records = Paragraph.objects.filter(id__in=rand_ids)

    serializer = ParagraphSerializer(data=random_records)

    if serializer.is_valid():
      return Response(serializer.data)

