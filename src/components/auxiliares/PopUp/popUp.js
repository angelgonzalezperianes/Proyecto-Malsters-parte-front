import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './popUp.css';

function PopUp(props) {
    return <div>
        <div id="popup" className="overlay">
            <div id="popupBody">
                <div className="titularNube">
                    <a id="cerrar" className="cerracion" href="#">{/*&times;*/}
                        <img src="http://localhost:3000/Styles/Icons/close.svg"></img>
                    </a>
                    <h1 className="tituloPop">{/*aqui titulo la className="tituloPop"*/}{props.titulo}</h1>
                </div>
                <div className="popupContent">
                    {/*aqui van los parrafos de la info la className="popTxt"*/}
                    <p className="popTxt">{props.descripcion}</p>
                    <p className="popTxt">{props.descripcion}</p>
                </div>
            </div>
        </div>
    </div>
}

export default PopUp;