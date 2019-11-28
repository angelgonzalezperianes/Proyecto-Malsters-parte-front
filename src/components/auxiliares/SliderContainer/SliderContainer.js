import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderContainer.css';
import SliderCard from '../SliderCard/SliderCard';


const SliderContainer = (props) => {
    return <div className="box">
        <SliderCard classCard={'cardA'} imagenUrl={props.card1} cardFooter={props.cardFooter1}></SliderCard>
        <SliderCard classCard={'cardA'} imagenUrl={props.card2} cardFooter={props.cardFooter2}></SliderCard>
        <SliderCard classCard={'cardA'} imagenUrl={props.card3} cardFooter={props.cardFooter3}></SliderCard>
        <SliderCard classCard={'cardA'} imagenUrl={props.card4} cardFooter={props.cardFooter4}></SliderCard>
        <SliderCard classCard={'cardA'} imagenUrl={props.card5} cardFooter={props.cardFooter5}></SliderCard>
    </div>
}

export default SliderContainer;