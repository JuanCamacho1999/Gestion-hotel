import React, { useState, useEffect } from 'react';
import { getRooms, createRoom } from '../services/api';
import { Container, Button, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';

const AdminPage = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({ number: '', type: '', price: '', available: true });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const roomData = await getRooms();
        if (Array.isArray(roomData)) {
          setRooms(roomData);
        } else {
          throw new Error('Datos de habitaciones inválidos');
        }
      } catch (err) {
        setError('');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleCreateRoom = async () => {
    try {
      await createRoom(newRoom);
      const roomData = await getRooms();
      if (Array.isArray(roomData)) {
        setRooms(roomData);
      } else {
        throw new Error('Datos de habitaciones inválidos');
      }
      setNewRoom({ number: '', type: '', price: '', available: true });
    } catch (err) {
      console.error('Error al crear habitación:', err);
      setError('Hubo un problema al crear la habitación');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Gestión de Habitaciones</Typography>

      {error && <Typography color="error">{error}</Typography>}

      {loading ? (
        <Typography>Cargando...</Typography>
      ) : (
        <List>
          {rooms.length > 0 ? (
            rooms.map((room) => (
              <ListItem key={room.id}>
                <ListItemText
                  primary={`Habitación ${room.number}`}
                  secondary={`Tipo: ${room.type}, Precio: $${room.price}, Disponible: ${room.available ? 'Sí' : 'No'}`}
                />
              </ListItem>
            ))
          ) : (
            <Typography>No hay habitaciones disponibles</Typography>
          )}
        </List>
      )}

      <Typography variant="h6">Crear Nueva Habitación</Typography>
      <TextField label="Número" value={newRoom.number} onChange={(e) => setNewRoom({ ...newRoom, number: e.target.value })} />
      <TextField label="Tipo" value={newRoom.type} onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })} />
      <TextField label="Precio" value={newRoom.price} onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })} />
      <Button onClick={handleCreateRoom} variant="contained">Crear Habitación</Button>
    </Container>
  );
};

export default AdminPage;
