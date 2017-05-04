from rest_framework import serializers
from ipsum.models import IpsumWord, Paragraph, DailyWord

class ParagraphSerializer(serializers.ModelSerializer):
  class Meta:
    model = Paragraph
    fields = ('text', )


class DailyWordSerializer(serializers.ModelSerializer):
  class Meta:
    model = DailyWord
    fields = ('date_saved', 'word', 'definition', )
