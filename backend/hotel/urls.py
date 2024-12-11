from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RoomViewSet, AdditionalServiceViewSet, GuestViewSet, ReservationViewSet, InvoiceViewSet

router = DefaultRouter()
router.register(r'rooms', RoomViewSet)
router.register(r'services', AdditionalServiceViewSet)
router.register(r'guests', GuestViewSet)
router.register(r'reservations', ReservationViewSet)
router.register(r'invoices', InvoiceViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
