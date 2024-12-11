import React, { useState, useEffect } from 'react';
import { getAvailableReservations, addInvoiceToReservation } from '../services/api';
import { Container, TextField, Button, Typography, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const AddInvoicePage = () => {
  const [reservations, setReservations] = useState([]);
  const [selectedReservation, setSelectedReservation] = useState('');
  const [total, setTotal] = useState('');
  const [discount, setDiscount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getAvailableReservations();
        setReservations(data);
      } catch (err) {
        setError('Error al cargar las reservaciones');
      }
    };
    fetchReservations();
  }, []);

  const handleAddInvoice = async () => {
    try {
      setError('');
      setSuccess('');
      await addInvoiceToReservation({
        reservation: selectedReservation,
        total: total,
        discount: discount,
        payment_method: paymentMethod,
      });
      setSuccess('Factura creada exitosamente.');
    } catch (err) {
      setError('Hubo un problema al crear la factura.');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Agregar Factura a una Reservación</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}

      <FormControl fullWidth margin="normal">
        <InputLabel>Seleccionar Reservación</InputLabel>
        <Select
          value={selectedReservation}
          onChange={(e) => setSelectedReservation(e.target.value)}
        >
          {reservations.map((res) => (
            <MenuItem key={res.id} value={res.id}>
              {`Habitación ${res.room_number} - ${res.guest_name} (${res.check_in} a ${res.check_out})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        label="Total"
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Descuento"
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Método de Pago"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleAddInvoice} variant="contained" color="primary">
        Agregar Factura
      </Button>
    </Container>
  );
};

export default AddInvoicePage;
