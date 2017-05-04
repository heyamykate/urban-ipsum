import requests
import datetime
from bs4 import BeautifulSoup
from ipsum.models import DailyWord
from django.core.management.base import BaseCommand

endpoint = "https://www.urbandictionary.com/"

class Command(BaseCommand):
  def handle(self, *args, **options):
    print("getting word of the day")
    get_daily_word()

def get_soup(endpoint):
  r = requests.get(endpoint)
  soup = BeautifulSoup(r.text, "html.parser")
  return soup

def get_daily_word(soup=None):
  if not soup:
    soup = get_soup(endpoint)
  header = soup.find(class_="def-panel").find(class_="def-header").find('a')
  meaning = soup.find(class_="def-panel").find(class_="meaning")
  word, created = DailyWord.objects.update_or_create(word=header.text,
                                            definition=meaning.text.strip(),
                                            date_saved=datetime.date.today())
  word.save()
  print('daily word: ', word)
  return word
