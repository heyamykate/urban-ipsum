import random
import re
import itertools
from ipsum.models import IpsumWord, Paragraph

word_count = 80

def generate_ipsum():
  ids = IpsumWord.objects.values_list('id', flat=True)
  n = word_count
  rand_ids = random.sample(ids, n)
  random_words = IpsumWord.objects.filter(id__in=rand_ids)
  words = []
  for word in random_words:
    words.append(word.word)
  random.shuffle(words)
  result = parse_sentences(words)
  return result

def split_seq(iterable, size):
  it = iter(iterable)
  item = list(itertools.islice(it, size))
  while item:
    yield item
    item = list(itertools.islice(it, size))

def parse_sentences(words):
  """
  Take list of words, cut into sentences with punctuation.
  """
  new_words = list(split_seq(words, 10))
  for item in new_words:
    last = item.pop(len(item)-1)
    last = re.sub('([a-z]+)[?:!.,;]*',r'\1',last)
    last = last + '.'
    item.append(last)
  result = create_paragraph(new_words)
  return result

def create_paragraph(sentences):
  """
  takes nested list and combines them into a paragraph
  """
  merged = list(itertools.chain.from_iterable(sentences))
  paragraph = ' '.join(word for word in merged)
  obj = Paragraph(text=paragraph)
  return obj
