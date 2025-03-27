from django.db import models
import json

class Student (models.Model):
    name = models.CharField(max_length=100)
    scores = models.JSONField()

    def get_avarage_score(self):
        if not self.scores:
            return 0
        total = sum(self.scores)
        return total/len(self.scores)

    def get_top_score(self):
        return max(self.scores)
