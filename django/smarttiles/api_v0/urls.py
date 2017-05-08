# -*- coding: utf-8 -*-
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'categories', CategoryViewSet)
router.register(r'firms', FirmViewSet)
router.register(r'collections', CollectionViewSet)

urlpatterns = router.urls