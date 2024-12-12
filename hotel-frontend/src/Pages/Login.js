import React, { useState } from 'react';
import imagenProfile from '../assets/goku.jpg';
import imagenRegistro from '../assets/registro.jpg';
import imagen from '../assets/3094352.jpg';
import '../App.css';


const Login = ({ onLogin }) => {
    const [registrando, setRegistrando] = useState(false); // Modo de registro o login
    // Este método simula el proceso de login o registro
    

    return (
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            
            <div className="row" style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                {/* Columna izquierda: Formulario de login/registro */}
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

                {/* Columna derecha: Imagen de registro o login */}
                <div className="col-md-6" style={{ padding: '0px' }}>
                    <img src={registrando ? imagenRegistro : imagen} alt="" style={{ width: '420px', height: '450px', margin:'7','border-radius': '70px' }}  />
                </div>
            </div>
        </div>
    );
};

export default Login;