from django.test import TestCase
from django.contrib.auth.models import User
from blog.models import Post, Category

#Testing Post model
class Test_Create_Post(TestCase):

    @classmethod
    def setUpTestData(cls):
        test_category = Category.objects.create(name= 'django')
        testUser = User.objects.create(
            username= 'test_user1', 
            password='123456')
        
        testBlog = Post.objects.create(
            category_id=1,
            title='test title',
            excerpt='test',
            status='published',
            slug='testSlug',
            content='Test content',
            author_id=1)
    
    def test_blog_content(self):
        post = Post.postobjects.get(id=1)
        cat = Category.objects.get(id=1)
        author = f'{post.author}'
        excerpt = f'{post.excerpt}'
        title = f'{post.title}'
        content = f'{post.content}'
        status = f'{post.status}'

        self.assertEqual(author, 'test_user1')
        self.assertEqual(title, 'test title')
        self.assertEqual(excerpt, 'test')
        self.assertEqual(content, 'Test content')
        self.assertEqual(status, 'published')
        self.assertEqual(str(post), 'test title')
        self.assertEqual(str(cat), 'django')

