from rest_framework import serializers
from django.contrib.auth.models import User

from . models import *

class DaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Days
        fields =  ['date', 'mood_color', 'journal_entry']

class MoodColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Days
        fields =  ['mood', 'color_code']