import React, { useState, useEffect } from 'react';
import { getRooms, createRoom } from '../services/api';
import { Container, Button, TextField, Typography, List, ListItem, ListItemText } from '@mui/material';
import imagen from '../assets/admin.jpg';
import '../App.css';



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
    <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div className="card card-body shadow-lg">
      <Typography variant="h4" 
        className='titulo'>Gestión de Habitaciones </Typography>

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
            <Typography style={{
              color: 'white'  // Estilo del label
              }}>No hay habitaciones disponibles</Typography>
          )}
        </List>
      )}
      
      <Typography variant="h6" className='titulo' >Crear Nueva Habitación </Typography>
      <TextField label="Número" InputLabelProps={{
                                          style: { color: 'white' } // Estilo del label
                                        }} 
                                        value={newRoom.number} onChange={(e) => setNewRoom({ ...newRoom, number: e.target.value })} />
      <TextField label="Tipo" InputLabelProps={{
                                          style: { color: 'white' } // Estilo del label
                                        }}  value={newRoom.type} onChange={(e) => setNewRoom({ ...newRoom, type: e.target.value })} />
      <TextField label="Precio" InputLabelProps={{
                                        style: { color: 'white' } // Estilo del label
                                      }} value={newRoom.price} onChange={(e) => setNewRoom({ ...newRoom, price: e.target.value })} />
      <Button onClick={handleCreateRoom} variant="contained" style={{color:'#ffe4c4','background-color': '#202020',
                                                                     'border-color': 'slategray',}}
                                        >Crear Habitación</Button>
      </div>
      <div className="col-md-6" style={{ padding: '100px' }}>
      <img src={imagen }  class='.estilo-profile' alt='' style={{'borderRadius':'60px', 'height': '600px','width': '800px'}} />
      </div>
    </Container>
    
  );
};

export default AdminPage;
