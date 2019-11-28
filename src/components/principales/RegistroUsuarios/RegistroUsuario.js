import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './RegistroUsuario.css';
import Nav from '../../auxiliares/Nav/Nav';
import Axios from 'axios';

function RegistroUsuario(props) {
    const [state, setState] = useState({
        nombre: '',
        apellidos: '',
        nickname: '',
        email: '',
        contraseña: '',
        cervezasFavoritas: '',
        imagenAvatar: ''
    })

    const RegistrarUsuario = (event) => {

        event.preventDefault()
        console.log('holaa')
        Axios.defaults.headers['Content-Type'] = 'application/json'
        Axios.defaults.headers.Accept = 'application/json'
        Axios.post('http://localhost:4000/usuarios/', state)
            .then(res => {                
                console.log(res.data)
                props.history.push('/UsuarioRegistrado');
            })
        return
    }

    return <div>
        <Nav></Nav>
        <div className="BloqueUsuarioFormulario">
            <div className="EnvaseLogo">
                <img className="logoFormularioUsuario" src="http://localhost:3000/Styles/Images/LOGO-MALSTERS copy.svg" />
            </div>
            <div className="tituloFormularioUsuario">
                <h1>
                    ¡Bienvenido a la comunidad!</h1>
            </div>
            <div className="textoFormularioUsuario">
                <p>¿Eres un apasionado de la cerveza? </p>
                <p>¿Quieres estar al tanto de las últimas novedades y eventos?</p>
                <p>¡Regístrate y no te pierdas nada!</p>
            </div>
            <div className="FormularioUsuario">
                <form onSubmit={RegistrarUsuario}>
                    <div className="VerticalesUsuario">
                        <label className="titulosUsuario">Nombre</label >
                        <input className="camposUsuario" type="text" value={state.nombre} onChange={(e) => setState({ ...state, nombre: e.target.value })} />
                        <label className="titulosUsuario">Apellidos</label >
                        <input className="camposUsuario" type="text" value={state.apellidos} onChange={(e) => setState({ ...state, apellidos: e.target.value })} />
                        <label className="titulosUsuario">Nickname</label >
                        <input className="camposUsuario" type="text" value={state.nickname} onChange={(e) => setState({ ...state, nickname: e.target.value })} />
                        <label className="titulosUsuario">Contraseña</label >
                        <input className="camposUsuario" type="password" value={state.contraseña} onChange={(e) => setState({ ...state, contraseña: e.target.value })} />
                        <label className="titulosUsuario">Avatar</label >
                        <input className="campoImagenUsuario" type="file" value={state.imagenAvatar} onChange={(e) => setState({ ...state, imagenAvatar: e.target.value })} />
                    </div>
                    <div className="cajaBotonUsuario">
                        <button className="botonFormularioUsuario" value="Registrar usuario">¡Regístrate!</button>
                    </div>
                </form>
            </div>

        </div>
    </div>

}

export default RegistroUsuario;