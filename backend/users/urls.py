from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', views.registerUser, name='register'),
    path('profile/', views.getUserProfile, name='user-profile'),
    path('update/', views.updateUserProfile, name='user-profile-update'),
    path('', views.getUsers, name='users'),
]