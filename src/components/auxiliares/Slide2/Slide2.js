import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './Slide2.css';


const Slider2 = () => {
    return <div className="box2">
        <div className="cardA2">
            <div className="icono2"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide2">
                <p className="titFooter2">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardB2">
            <div className="icono2"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide2">
                <p className="titFooter2">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardC2">
            <div className="icono2"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide2">
                <p className="titFooter2">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardD2">
            <div className="icono2"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide2">
                <p className="titFooter2">Capa 10 Barrel Brewing</p>
            </div>
        </div>

    </div>
}


export default Slider2;