import React from 'react';
import './LoginForm.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Inicio de Sesión</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario' required/>
                    <PersonIcon className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Contrasena' required/>
                    <LockIcon className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Mantener sesión</label>
                    <a href="#">Olvidaste tu Contraseña?</a>
                </div>

                <button type="submit">Ingresar</button>

                <div className="register-link">
                    <p>No estas Registrado? <a href="#">Registrar</a></p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm