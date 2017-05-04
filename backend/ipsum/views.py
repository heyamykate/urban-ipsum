# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics

from ipsum.serializers import ParagraphSerializer, DailyWordSerializer
from ipsum.models import IpsumWord, Paragraph, DailyWord
from ipsum.utils import generate_ipsum

class ParagraphList(viewsets.ModelViewSet):
  queryset = Paragraph.objects.all()
  serializer_class = ParagraphSerializer

  def get_queryset(self):
    if self.request.method == 'GET' and 'count' in self.request.GET:
      num_paragraphs = self.request.GET['count']
      num_paragraphs = int(num_paragraphs)
    else:
      num_paragraphs = 3
    count = 0
    paragraphs = []
    while count < num_paragraphs:
      item = generate_ipsum()
      paragraphs.append(item)
      count += 1
    return paragraphs

class DailyWordView(viewsets.ModelViewSet):
  queryset = DailyWord.objects.all()
  serializer_class = DailyWordSerializer

  # def get(self, request, format=None):
  #   words = DailyWord.objects.all()
  #   serializer = DailyWordSerializer(words, many=True)
  #   return Response(serializer.data)
