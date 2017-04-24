from django.core.management.base import BaseCommand, CommandError

from ipsum.models import IpsumWord

class Command(BaseCommand):
  def handle(self, *args, **options):
    print("flushing words")
    flush_words()

def flush_words():
  print("flushing existing words")
  IpsumWord.objects.all().delete()
