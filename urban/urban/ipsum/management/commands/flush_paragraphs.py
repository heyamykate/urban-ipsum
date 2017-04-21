from django.core.management.base import BaseCommand, CommandError

from ipsum.models import Paragraph

class Command(BaseCommand):
  def handle(self, *args, **options):
    print("flushing words")
    flush_paragraphs()

def flush_paragraphs():
  print("flushing existing paragraphs")
  Paragraph.objects.all().delete()