from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self) -> models.QuerySet:
            return super().get_queryset() .filter(status='published')
    options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )

    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(max_length=10, choices=options, default='published')

    objects = models.Manager() # Default Manager
    postobjects = PostObjects() #Custom Manager


    class Meta:
        ordering = ('published',)

    def __str__(self):
        return self.title