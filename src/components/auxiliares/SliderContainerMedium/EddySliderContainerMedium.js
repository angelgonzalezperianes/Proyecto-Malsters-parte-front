import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderContainerMedium.css';
import SliderCardMedium from '../SliderCardMedium/SliderCardMedium';


const EddySliderContainerMedium = (props) => {
    /*por props me llegan todos los eventos a pintar
    con ellos creo mis tarjetas .
    lo tengop ke mappear en una const fuera y leugo pinto esa func si es 
    de elementos jsx*/
    //console.log('AQUIIIII',typeof props.datos)
    const elementos = props.datos.map((item, indice)=>{
        return <SliderCardMedium key={indice} classCard={'cardB'} rutaHeredada={props.rutaHeredada} imagenUrl={item.imagen} cardFooter={item.nombre} cardId={item._id} bgSize={props.bgSize} widthData={props.widthData} srcIcono={props.srcIcono}/>
    })
    return <div className="box2">{elementos}</div>
}

export default EddySliderContainerMedium;