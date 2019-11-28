import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './SliderCardMedium.css';


const SliderCardMedium = (props, match) => {
    const imgUrl = props.imagenUrl
    const bgSize = props.bgSize
    const widthData = props.widthData
    const srcIcono = props.srcIcono

    console.log()

    return <Link to={props.rutaHeredada + props.cardId} ><div className={props.classCard} style={{ backgroundImage: `url(${imgUrl})`, backgroundSize:`${bgSize}`, width:`${widthData}` }} >
        <div className="icono2"><img src={srcIcono} width="40px" height="40px" /></div>
        <div className="footerSlide2">
            <p className="titFooter2">{props.cardFooter}</p>
        </div>
    </div>
    </Link>
}


export default SliderCardMedium;