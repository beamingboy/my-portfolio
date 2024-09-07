from django.urls import path
from .views import GetList, GetBlog, CreateBlog

app_name = 'blog_api'


urlpatterns = [
    path('blog/<int:pk>', GetBlog.as_view(), name="get_blog"),
    path('blog', GetList.as_view(), name="get_list"),
    path('blog/create', CreateBlog.as_view(), name="createBlog"),
]