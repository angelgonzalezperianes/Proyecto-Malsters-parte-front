import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './VistaEventos.css';
import Espuma from '../../auxiliares/Espuma/Espuma';
import Slider from '../../auxiliares/Slide/Slide'
import Nav from '../../auxiliares/Nav/Nav'
import EddySliderContainerMedium from '../../auxiliares/SliderContainerMedium/EddySliderContainerMedium';
import axios from 'axios';


function VistaEventos() {
    const [estado, setEstado] = useState({ data: [] });
    const [estado2, setEstado2] = useState({ data: [] });
    /**recupero desde bdd */
    useEffect(() => {
        // la tengo ke declarar y usar AudioWorklet;
        //  el estado se settea dentro
        axios.get("http://localhost:4000/eventos")
            .then(datos => setEstado({ data: datos.data }));
        //recupero datos y seteo estado1 vez
        /**con el return se hace 
         * al final el cicle de vida de este 
         * componente */
        axios.get("http://localhost:4000/menosEventos")
            .then(datos => setEstado2({ data: datos.data }));

    }, []);
    // console.log( 'EDEDERERe', estado.data);
    return <div className="VistaEventos">
        <Espuma nombre={"EVENTOS"}></Espuma>
        <h2 className="tit">TODOS LOS EVENTOS</h2>
        <EddySliderContainerMedium datos={estado.data} rutaHeredada={'evento/'} bgSize={'cover'} srcIcono={"http://localhost:3000/Styles/Icons/event.svg"}/>
        <h2 className="tit">FESTIVALES</h2>
        <EddySliderContainerMedium datos={estado2.data} rutaHeredada={'evento/'} bgSize={'cover'} srcIcono={"http://localhost:3000/Styles/Icons/event.svg"}/>

        <Nav></Nav>
    </div>
}

export default VistaEventos;