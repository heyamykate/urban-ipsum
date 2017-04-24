# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class IpsumWord(models.Model):
  word = models.CharField(max_length=500,
                          blank=True,
                          null=True)

  def __unicode__(self):
    return "Ipsum - {0}".format(self.word)

  class Meta:
    ordering = ('word', )


class Paragraph(models.Model):
  text = models.TextField()

class DailyWord(models.Model):
  word = models.CharField(max_length=300)
  meaning = models.TextField()
  date_saved = models.DateField(auto_now=False,
                                auto_now_add=False)

  def __unicode__(self):
    return "Daily Word - {0}".format(self.word)
  class Meta:
    ordering = ('date_saved', )
