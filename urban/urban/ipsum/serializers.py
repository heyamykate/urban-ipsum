from rest_framework import serializers
from ipsum.models import IpsumWord, Paragraph

class ParagraphSerializer(serializers.ModelSerializer):
  class Meta:
    model = Paragraph
    fields = ('text', )