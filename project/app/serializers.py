from rest_framework import serializers
from django.contrib.auth.models import User

from . models import *

class DaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Days
        fields =  fields =  ['date', 'content', 'mood_color', 'proper_nutrition', 'proper_hydration',
            'hydration_amount', 'proper_exercise', 'exercise_duration', 'exercise_description',
            'hours_of_sleep']

class MoodColorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Days
        fields =  ['mood', 'color_code']
