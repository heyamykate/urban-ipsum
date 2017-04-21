# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
import random

from ipsum.serializers import IpsumSerializer, ParagraphSerializer
from ipsum.models import IpsumWord, Paragraph
from ipsum.utils import generate_ipsum

class ParagraphList(generics.ListAPIView):
  queryset = Paragraph.objects.all()
  serializer_class = ParagraphSerializer

  def list(self, request):
    queryset = self.get_queryset()
    serializer = ParagraphSerializer(queryset, many=True)
    return Response(serializer.data)

  def get_queryset(self):
    if self.request.method == 'GET' and 'count' in self.request.GET:
      num_paragraphs = self.request.GET['count']
      print('paragraphs: ', num_paragraphs)
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

