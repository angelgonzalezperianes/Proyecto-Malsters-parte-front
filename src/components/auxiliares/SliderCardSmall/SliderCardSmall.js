import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderCardSmall.css';


const SliderCardSmall = (props) => {
    const imgUrl = props.imagenUrl

    return <div className={props.classCard} style={{ backgroundImage: `url(${imgUrl})` }} >
        <div className="icono2"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
        <div className="footerSlide2">
            <p className="titFooter2">{props.cardFooter}</p>
        </div>
    </div>


}


export default SliderCardSmall;