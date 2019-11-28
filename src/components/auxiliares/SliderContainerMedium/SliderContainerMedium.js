import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderContainerMedium.css';
import SliderCardMedium from '../SliderCardMedium/SliderCardMedium';


const SliderContainerMedium = (props) => {
    return <div className="box2">
        <SliderCardMedium  classCard={'cardB'} imagenUrl={props.card1} cardFooter={props.cardFooter1} cardId={props.cardId1}/>
        <SliderCardMedium  classCard={'cardB'} imagenUrl={props.card2} cardFooter={props.cardFooter2} cardId={props.cardId2}/>
        <SliderCardMedium  classCard={'cardB'} imagenUrl={props.card3} cardFooter={props.cardFooter3} cardId={props.cardId3}/>
        <SliderCardMedium  classCard={'cardB'} imagenUrl={props.card4} cardFooter={props.cardFooter4} cardId={props.cardId4}/>
        <SliderCardMedium  classCard={'cardB'} imagenUrl={props.card5} cardFooter={props.cardFooter5} cardId={props.cardId5}/>
    </div>
}

export default SliderContainerMedium;