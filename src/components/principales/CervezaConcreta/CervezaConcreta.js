import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { browserHistory } from 'react-router';

//const bw = require('browser-history')

import './CervezaConcreta.css';
//import EspumaCerveza from '../../auxiliares/EspumaCerveza/EspumaCerveza';
//import Axios from 'axios';
import PopUp from '../../auxiliares/PopUp/popUp';
import Nav from '../../auxiliares/Nav/Nav';

function CervezaConcreta({ props, match, history }) {


    const idUrl = 'http://localhost:4000/cervezas/' + match.params.id

    const [datosCerveza, setDatosCerveza] = useState(
        {
            nombre: '',
            imagen: '',
            descripcion: '',
            ibu: undefined,
            abv: undefined,
            kcal: undefined,
            estilo: '',
            fabricante: '',
            precio: undefined
        })

    useEffect(() => {
        fetch(idUrl)
            .then(respuesta => respuesta.json())
            .then(
                data => setDatosCerveza({
                    nombre: data.nombre,
                    imagen: data.imagen,
                    descripcion: data.descripcion,
                    ibu: data.ibu,
                    abv: data.abv,
                    kcal: data.kcal,
                    estilo: data.estilo,
                    fabricante: data.fabricante,
                    precio: data.precio
                }))
    }, [])

    return <div className="VC">
        <div className="Log">
            <img className="imageLog" src="http://localhost:3000/Styles/Images/LOGO MALSTERS.svg" />
        </div>
        <div className="beerBox">
            <div className="espumita">
                <img className="image" src="http://localhost:3000/Styles/Images/TOP CARD SOLID copy.svg" />
                <div className="EspumaCerveza">
                    {/* <button onClick={{browserHistory.goBack}}> <img className="iconLeft" src="http://localhost:3000/Styles/Icons/arrowup.svg" /> </button> */}
                    <Link to="/cervezas"><img className="iconLeft" src="http://localhost:3000/Styles/Icons/arrowup.svg" /></Link>
                    <p className="nombreCerveza">{datosCerveza.nombre}</p>
                    <img className="iconRight" src="http://localhost:3000/Styles/Icons/favoriteEmpty.svg" />
                </div>
            </div>

            <div className="content">
                <div class="beerCaja">
                    <div className="beerImg">
                        <img className="imagenBeer" src={datosCerveza.imagen} width="100px" height="280px" />
                    </div>
                    {/* <div className="pentagramaDeLaMuerte">
                        aqui va el pentagrama
                    </div> */}
                </div>
                <div className="statsBox">
                    <div className="beerStats">
                        <span className="caracteristicas">IBU: <span className="colorStat">{datosCerveza.ibu}</span></span>
                        <span className="caracteristicas">ABV: <span className="colorStat">{datosCerveza.abv}</span> </span>
                        <span className="caracteristicas">KCAL: <span className="colorStat">{datosCerveza.kcal} </span></span>
                        <span className="caracteristicas">ESTILO: <span className="colorStat">{datosCerveza.estilo}</span></span>
                    </div>

                </div>
                <div className="fabricado">
                    <p >Fabricado por <span className="enlaceFabric">{datosCerveza.fabricante}<Link to="/"> Innis & Gunn Brewing Co.</Link></span></p>
                </div>
                <div className="comprar">
                    <p>Disponible on-line por: {datosCerveza.precio}€ c/u</p>
                    <a href="#popup"> <button className="boton">Descripción</button></a>
                </div>

            </div>
        </div>

        <PopUp titulo={datosCerveza.nombre} descripcion={datosCerveza.descripcion} />
        <Nav></Nav>
    </div>
}

export default CervezaConcreta;