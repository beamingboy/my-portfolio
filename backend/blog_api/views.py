from rest_framework import generics # type: ignore
from blog.models import Post
from .serializers import PostSerializer

# Post API's for Admin Only
class CreateBlog(generics.CreateAPIView):
    queryset = Post.PostObjects
    serializer_class = PostSerializer

# Get API's for react
class GetList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class GetBlog(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer