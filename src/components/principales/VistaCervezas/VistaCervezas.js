import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './VistaCervezas.css';
import Espuma from '../../auxiliares/Espuma/Espuma';
// import Slider from '../../auxiliares/Slide/Slide'
import Nav from '../../auxiliares/Nav/Nav'
import SliderContainerMedium from '../../auxiliares/SliderContainerMedium/SliderContainerMedium';
import axios from 'axios'
import EddySliderContainerMedium from '../../auxiliares/SliderContainerMedium/EddySliderContainerMedium';

// import useState from 'react'



function VistaCervezas() {
    const [estado, setEstado] = useState({ data: [] });
    const [estado2, setEstado2] = useState({ data: [] });
    /**recupero desde bdd */
    useEffect(() => {
        // la tengo ke declarar y usar AudioWorklet;
        //  el estado se settea dentro
        axios.get("http://localhost:4000/cervezas")
            .then(datos => setEstado({ data: datos.data }));
        //recupero datos y seteo estado1 vez
        /**con el return se hace 
         * al final el cicle de vida de este 
         * componente */
        axios.get("http://localhost:4000/menoscervezas")
            .then(datos => setEstado2({ data: datos.data }));

    }, []);
    // console.log( 'EDEDERERe', estado.data);
    return <div className="VistaEventos">
        <Espuma nombre={"CERVEZAS"}></Espuma>
        <h2 className="tit">CERVEZAS</h2>
        <EddySliderContainerMedium datos={estado.data} rutaHeredada={'cerveza/'} bgSize={'auto'} srcIcono={"http://localhost:3000/Styles/Icons/beer.svg"} />
        <h2 className="tit">LAGER</h2>
        <EddySliderContainerMedium datos={estado2.data} rutaHeredada={'cerveza/'} bgSize={'auto'} srcIcono={"http://localhost:3000/Styles/Icons/beer.svg"} />

        <Nav></Nav>
    </div>
}

export default VistaCervezas;