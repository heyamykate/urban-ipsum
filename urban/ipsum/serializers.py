from rest_framework import serializers
from ipsum.models import IpsumWord, Paragraph

class IpsumSerializer(serializers.ModelSerializer):
  class Meta:
    model = IpsumWord
    fields = ('word', )

class ParagraphSerializer(serializers.ModelSerializer):
  class Meta:
    model = Paragraph
    fields = ('text', )