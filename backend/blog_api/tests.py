from django.urls import reverse
from rest_framework import status # type: ignore
from rest_framework.test import APITestCase # type: ignore
from blog.models import Post, Category
from django.contrib.auth.models import User


#Testing Get Blog request
class GetTests(APITestCase):

    def test_view_gets(self):
        url = reverse('blog_api:get_list')
        response = self.client.get(url,format='jason')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


#Testing Get Blog request
class PostTests(APITestCase):

    def test_view_posts(self):
        # Populating category in database
        self.test_category = Category.objects.create(name='django')

        # Populating User in database
        self.test_user = User.objects.create(username= 'test_user1', 
                password='123456')
        
        # Blog Test data
        data = {
            "id": 1,
            "category": 1,
            "title": "test1",
            "author": 1,
            "excerpt": "Test",
            "content": "The test blog",
            "status": "published"
        }    

        url = reverse('blog_api:createBlog')
        response = self.client.post(url, data ,format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)