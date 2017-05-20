import json
import requests
from bs4 import BeautifulSoup
import re
import itertools
from ipsum.bad_words import not_allowed
import htmllib

from django.core.management.base import BaseCommand, CommandError

from ipsum.models import IpsumWord

WORDS_ENDPOINT = "http://www.urbandictionary.com/popular.php?character={0}"
letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

class Command(BaseCommand):
  def handle(self, *args, **options):
    print("scraping urban dictionary")
    query_urban(letters)

def unescape(s):
    p = htmllib.HTMLParser(None)
    p.save_bgn()
    p.feed(s)
    return p.save_end()

def query_urban(letters):
  """
  accepts list of letters
  scrapes popular words for each letter
  appends the results into an array of 'results'
  """
  results = []
  for letter in letters:
    print('getting words for letter {0}'.format(letter))
    words = parse_words(letter, None)
    for word in words:
        for bad in not_allowed:
            if bad in word:
                print('bad word: ', bad)
                print('offender: ', word)
            else:
                word = unescape(word)
                print(word)
                results.append(word)
    # for bad_word in not_allowed:
    #     for word in words:
    #         if bad_word not in word:
    #             results.append(word)
    #         else:
    #             print('bad: ', bad_word)
    #             print('word: ', word)
    #for word in words:
    #   if 'nigger' not in word and 'Nigger' not in word and 'nigga' not in word and 'Nigga' not in word and 'Pussy' not in word and 'pussy' not in word:
        #results.append(word)
  save_words(results)

def get_soup(letter, link=WORDS_ENDPOINT):
  r = requests.get(link.format(letter))
  soup = BeautifulSoup(r.text, "html.parser")
  #soup = soup.prettify(formatter="none")
  return soup

def parse_words(letter, soup=None):
  if not soup:
    soup = get_soup(letter, WORDS_ENDPOINT)
  word_divs = soup.find(id="columnist").find_all('a')
  words = [div.text for div in word_divs]
  #print(words)
  return words

def save_words(results):
  for item in results:
    obj, created = IpsumWord.objects.update_or_create(word=item)
    obj.save()
