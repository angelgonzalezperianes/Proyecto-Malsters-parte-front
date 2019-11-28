import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderContainerSmall.css';
import SliderCardSmall from '../SliderCardSmall/SliderCardSmall';


const SliderContainerSmall = (props) => {
    return <div className="box2">
        <SliderCardSmall classCard={'cardC'} imagenUrl={props.card1} cardFooter={props.cardFooter1}></SliderCardSmall>
        <SliderCardSmall classCard={'cardC'} imagenUrl={props.card2} cardFooter={props.cardFooter2}></SliderCardSmall>
        <SliderCardSmall classCard={'cardC'} imagenUrl={props.card3} cardFooter={props.cardFooter3}></SliderCardSmall>
        <SliderCardSmall classCard={'cardC'} imagenUrl={props.card4} cardFooter={props.cardFooter4}></SliderCardSmall>
        <SliderCardSmall classCard={'cardC'} imagenUrl={props.card5} cardFooter={props.cardFooter5}></SliderCardSmall>
    </div>
}

export default SliderContainerSmall;