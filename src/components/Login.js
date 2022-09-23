import axios from 'axios';
import swAlert from '@sweetalert/with-react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../css/style.css';



function Login() {
    const history = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value
        const password = e.target.password.value

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


        if (email === '' || password === '') {
            swAlert(
                <div>
                    <h2>Los campos no deben estar vacíos</h2>
                </div>
            )
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swAlert(
                <div>
                    <h2>Debes escribir una dirección de correo electrónico válida</h2>
                </div>
            )
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert('Credenciales inválidas');
            return
        }

        console.log('Ok, estamos listos para enviar la información');
        /*axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swAlert(<h2>Perfeto, ingresaste correctamente</h2>)
                const tokenRecibido = res.data.token;
                sessionStorage.setItem('token', tokenRecibido);
                history('/listado');
            })*/
            swAlert(<h2>Perfeto, ingresaste correctamente</h2>)
            const tokenRecibido = 'token válido';
            sessionStorage.setItem('token', tokenRecibido);
            history('/listado'); 
    }
    let token = sessionStorage.getItem('token');


    return (
        <>
            {token && <Navigate to='/listado' />}
            <div className="container">
                <br />
                <form className="form" onSubmit={submitHandler}>
                    <h2>Formulario de Login</h2>
                    <label>
                        <span> Correo electrónico:</span>
                        <br />
                        <input type="text" name="email" />
                    </label>
                    <br />
                    <label>
                        <span> Contraseña:</span>
                        <br />
                        <input type="password" name="password" />
                    </label>
                    <br />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </>
    )
}
export default Login;