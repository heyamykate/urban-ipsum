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
