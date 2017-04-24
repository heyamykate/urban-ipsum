# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

from ipsum.models import IpsumWord, Paragraph, DailyWord

class ParagraphAdmin(admin.ModelAdmin):
  model = Paragraph

admin.site.register(Paragraph, ParagraphAdmin)


class IpsumAdmin(admin.ModelAdmin):
  model = IpsumWord
  list_display = ('word', )
  search_fields = ['word', ]

admin.site.register(IpsumWord, IpsumAdmin)

class DailyWordAdmin(admin.ModelAdmin):
  model = DailyWord
  list_display = ('word', 'date_saved', )

admin.site.register(DailyWord, DailyWordAdmin)