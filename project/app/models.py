from django.db import models
from django.utils.translation import gettext_lazy as _


class MoodColors(models.TextChoices):
    HAPPY = "#FFFF00", _("Happy")        # Yellow
    SAD = "#0000FF", _("Sad")            # Blue
    ANGRY = "#FF0000", _("Angry")        # Red
    RELAXED = "#00FF00", _("Relaxed")    # Green
    NEUTRAL = "#808080", _("Neutral")    # Gray


class Days(models.Model):
    date = models.DateField(unique=True)  # Ensures each date is unique
    mood_color = models.CharField(
        max_length=7,  # HEX color code length
        choices=MoodColors.choices,
        default=MoodColors.NEUTRAL,
    )
    journal_entry = models.TextField(blank=True, null=True)  # Optional journal entry

    def __str__(self):
        return f"Entry for {self.date} - {self.get_mood_color_display()}"
