import React, { useState } from 'react';
import imagenProfile from '../assets/goku.jpg';
import imagenRegistro from '../assets/registro.jpg';
import imagen from '../assets/3094352.jpg';
import '../App.css';

/*
const Login = ({ onLogin }) => {
    const [registrando, setRegistrando] = useState(false); // Modo de registro o login
    // Este método simula el proceso de login o registro
    

    return (
    *//*
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            
            <div className="row" style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                {/* Columna izquierda: Formulario de login/registro *//*}
                <div className="col-md-6" style={{ padding: '20px' }}>
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={imagenProfile }  class='.estilo-profile' alt='' style={{'borderRadius':'70px', 'height': '140px','width': '140px'}} />
                            
                                <input
                                    type="text"
                                    placeholder="Ingrese Email"
                                    className='texto'
                                />
                                <input
                                    type="password"
                                    placeholder="Ingrese contraseña"
                                    className='texto'
                                />
                                <button type="submit" className= "texto" style={{
                                                            'color':'white'}}>
                                    {registrando ? 'Registrate' : 'Inicia sesión'}
                                </button>
                            
                            <button
                                onClick={() => setRegistrando(!registrando)}
                                className="btnSwitch"
                            >
                                {registrando? '¿Ya tienes cuenta? Inicia sesión': '¿No tienes cuenta? Regístrate'}
                            </button>
                        </div>
                    </div>
                </div>
*/                /*
                {/* Columna derecha: Imagen de registro o login *//*}
                
                <div className="col-md-6" style={{ padding: '0px' }}>
                    <img src={registrando ? imagenRegistro : imagen} alt="" style={{ width: '420px', height: '450px', margin:'7','border-radius': '70px' }}  />
                </div>
            </div>
        </div>
    );
};

export default Login;
*/

const Login = ({ onLogin }) => {
  const [registrando, setRegistrando] = useState(false); // Modo de registro o login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (registrando) {
      console.log('Registrando usuario:', { name, email, password });
      // Aquí puedes añadir la lógica para el registro
    } else {
      console.log('Iniciando sesión con:', { email, password });
      // Aquí puedes añadir la lógica para el inicio de sesión
      onLogin?.(email); // Llama al callback si está definido
    }
  };

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        className="row"
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Columna izquierda: Formulario de login/registro */}
        <div className="col-md-6" style={{ padding: '20px' }}>
          <div className="padre">
            <div className="card card-body shadow-lg">
              <img
                src={imagenProfile}
                alt="Profile"
                className="estilo-profile"
                style={{
                  borderRadius: '20px',
                  height: '100px',
                  width: '100px',
                  margin: '10px auto',
                }}
              />
              <form onSubmit={handleSubmit}>
                {registrando && (
                  <input
                    type="text"
                    placeholder="Ingrese su nombre"
                    className="texto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                )}
                <input
                  type="email"
                  placeholder="Ingrese Email"
                  className="texto"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Ingrese contraseña"
                  className="texto"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="submit"
                  className="texto"
                  style={{
                    color: 'white',
                    backgroundColor: '#007bff',
                    border: 'none',
                    padding: '10px 20px',
                    marginTop: '10px',
                    borderRadius: '5px',
                  }}
                >
                  {registrando ? 'Regístrate' : 'Inicia sesión'}
                </button>
              </form>
              <button
                onClick={() => setRegistrando(!registrando)}
                className="btnSwitch"
                style={{
                  marginTop: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#007bff',
                  cursor: 'pointer',
                }}
              >
                {registrando
                  ? '¿Ya tienes cuenta? Inicia sesión'
                  : '¿No tienes cuenta? Regístrate'}
              </button>
            </div>
          </div>
        </div>

        {/* Columna derecha: Imagen de registro o login */}
        <div className="col-md-6" style={{ padding: '0px' }}>
          <img
            src={registrando ? imagenRegistro : imagen}
            alt="Registro o Login"
            style={{
              width: '100%',
              height: 'auto',
              margin: '7px',
              borderRadius: '15px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
