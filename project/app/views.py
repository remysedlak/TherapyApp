from rest_framework import generics

from .models import Days
from .serializers import DaysSerializer

class DaysItemView(generics.ListCreateAPIView):
    queryset = Days.objects.all()
    serializer_class = DaysSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        date = self.request.query_params.get('date')
        if date:
            queryset = queryset.filter(date=date)
        return queryset

from . models import MoodColors
from . serializers import MoodColorsSerializer

class MoodColorsItemView(generics.ListCreateAPIView):
    def get(self, request):
        # Use TextChoices to return mood options
        mood_choices = [{"mood": mood.label, "color_code": mood.value} for mood in MoodColors]
        return Response(mood_choices)