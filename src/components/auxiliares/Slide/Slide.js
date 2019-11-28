import React from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './Slide.css';


const Slider = () => {
    return <div className="box">
        <div className="cardA">
            <div className="icono"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide">
                <p className="titFooter">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardB">
            <div className="icono"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide">
                <p className="titFooter">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardC">
            <div className="icono"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide">
                <p className="titFooter">Capa 10 Barrel Brewing</p>
            </div>
        </div>

        <div className="cardD">
            <div className="icono"><img src="http://localhost:3000/Styles/Icons/beer.svg" width="40px" height="40px" /></div>
            <div className="footerSlide">
                <p className="titFooter">Capa 10 Barrel Brewing</p>
            </div>
        </div>

    </div>
}


export default Slider;