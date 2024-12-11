
from rest_framework import serializers
from .models import Room, AdditionalService, Guest, Reservation, Invoice

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class AdditionalServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdditionalService
        fields = '__all__'

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guest
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = ['guest', 'room', 'check_in', 'check_out', 'services']

    def create(self, validated_data):
        services_data = validated_data.pop('services', [])
        reservation = Reservation.objects.create(**validated_data)
        reservation.services.set(services_data)  # Asignar los servicios seleccionados
        return reservation

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = '__all__'

