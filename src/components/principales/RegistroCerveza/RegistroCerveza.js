import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './RegistroCerveza.css';
import Nav from '../../auxiliares/Nav/Nav';
import Axios from 'axios';

function RegistroCerveza(props) {
    const [state, setState] = useState({
        nombre: '',
        marca: '',
        imagenBotella: '',
        ibu: 0,
        abv: 0,
        kcal: 0,
        estilo: ''
    })

    const RegistrarCerveza = (event) => {

        event.preventDefault()
        console.log('holaa')
        Axios.defaults.headers['Content-Type'] = 'application/json'
        Axios.defaults.headers.Accept = 'application/json'
        Axios.post('http://localhost:4000/cervezas/', state)
            .then(res => {
                console.log(res.data);
                props.history.push('/productoregistrado');
            })
        return
    }

    return <div><Nav></Nav>
        <div className="BloqueFormulario">
            <div className="CajaLogo">
                <img className="logo" src="http://localhost:3000/Styles/Images/LOGO-MALSTERS copy.svg" />
            </div>
            <div className="tituloFormulario">
                <h1>
                    Registrar
            </h1>
                <h1>
                    Nueva Cerveza
                </h1>
            </div>
            <div className="textoFormulario">
                <p>Para nosotros también es importante ampliar nuestros conocimientos.
                    Por favor, introduce estos breves datos y nos encargaremos de incorporarlos en la app.
            </p>
            </div>
            <div className="Formulario">
                <form onSubmit={RegistrarCerveza}>
                    <div className="Verticales">
                        <label className="titulos">Nombre</label >
                        <input className="campos" type="text" value={state.nombre} onChange={(e) => setState({ ...state, nombre: e.target.value })} />
                        <label className="titulos">Fabricante</label >
                        <input className="campos" type="text" value={state.marca} onChange={(e) => setState({ ...state, marca: e.target.value })} />
                        <label className="titulos">Imagen</label >
                        <input className="campoImagen" type="file" value={state.imagenBotella} onChange={(e) => setState({ ...state, imagenBotella: e.target.value })} />
                    </div>
                    <div className="Horizontales">
                        <label className="titulosHorizontales">IBU</label >
                        <input className="camposHorizontales" type="number" value={state.ibu} onChange={(e) => setState({ ...state, ibu: e.target.value })} />
                        <label className="titulosHorizontales">ABV</label >
                        <input className="camposHorizontales" type="number" value={state.abv} onChange={(e) => setState({ ...state, abv: e.target.value })} />
                        <label className="titulosHorizontales">Kcal</label >
                        <input className="camposHorizontales" type="number" value={state.kcal} onChange={(e) => setState({ ...state, kcal: e.target.value })} />
                        <label className="titulosHorizontales">Estilo</label >
                        <input className="camposHorizontales" type="text" value={state.estilo} onChange={(e) => setState({ ...state, estilo: e.target.value })} />
                    </div>
                    <div className="cajaBotonCerveza">
                        <button className="botonFormularioCerveza" value="Registrar producto">Registrar Producto</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

}

export default RegistroCerveza;