# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from ipsum.models import IpsumWord, Paragraph

class ParagraphAdmin(admin.ModelAdmin):
  model = Paragraph

admin.site.register(Paragraph, ParagraphAdmin)


class IpsumAdmin(admin.ModelAdmin):
  model = IpsumWord
  list_display = ('word', )
  search_fields = ['word', ]

admin.site.register(IpsumWord, IpsumAdmin)