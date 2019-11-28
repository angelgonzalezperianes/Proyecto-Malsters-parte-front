import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './EventoConcreto.css';
//import EspumaCerveza from '../../auxiliares/EspumaCerveza/EspumaCerveza';
//import Axios from 'axios';
import PopUp from '../../auxiliares/PopUp/popUp';
import Nav from '../../auxiliares/Nav/Nav';

function EventoConcreto({ match }) {

    const idUrl = 'http://localhost:4000/eventos/' + match.params.id



    const [datosEventos, setDatosEventos] = useState(
        {
            tipo: [],
            nombre: '',
            imagen: '',
            descripcion: '',
            fechaInicio: undefined,
            fechaFin: undefined,
            Lugar: { latitud: undefined, longitud: undefined },

        })




    useEffect(() => {
        fetch(idUrl)
            .then(respuesta => respuesta.json())
            .then(
                data => setDatosEventos({
                    tipo: data.tipo.map((x) => { return x + ' ' }),
                    imagen: data.imagen,
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    fechaInicio: data.fechaInicio.replace('T00:00:00.000Z', ''),
                    fechaFin: data.fechaFin.replace('T00:00:00.000Z', ''),
                    lugar: data.lugar,
                }))
    }, [])

    //if nombreLugar.
    //console.log(datosEventos.fechaInicio)

    return <div className="VC">
        <div className="Log">
            <img className="imageLog" src="http://localhost:3000/Styles/Images/LOGO MALSTERS.svg" />
        </div>
        <div className="beerBox">
            <div className="espumita">
                <img className="image" src="http://localhost:3000/Styles/Images/TOP CARD SOLID copy.svg" />
                <div className="EspumaCerveza">
                    <Link to="/eventos"><img className="iconLeft" src="http://localhost:3000/Styles/Icons/arrowup.svg" /></Link>
                    <p className="nombreCerveza">{datosEventos.nombre}</p>
                    <img className="iconRight" src="http://localhost:3000/Styles/Icons/favoriteEmpty.svg" />
                </div>
            </div>

            <div className="content">
                <div className="beerCaja">
                    <div className="dispFlex">
                        <img className="" src={datosEventos.imagen} width="265px" />
                    </div>
                    {/* <div className="pentagramaDeLaMuerte">
                        aqui va el pentagrama
                    </div> */}
                </div>
                <div className="statsBox">
                    <div className="beerStats ">
                        <div className="biBloque">
                            <div>
                                <p className="caracteristicas">Tipo de Evento: </p>
                            </div>
                            <div>
                                <p className="colorStat">  {datosEventos.tipo}</p>
                            </div>
                        </div>

                        {/* <span className="caracteristicas">ABV: <span className="colorStat"> 5</span> </span>
                        <span className="caracteristicas">KCAL: <span className="colorStat"> 2'4% </span></span>
                        <span className="caracteristicas">ESTILO: <span className="colorStat"> IPA</span></span> */}
                    </div>
                </div>
                <div className="fabricado">
                    <p >Fecha:<span className="enlaceFabric"><Link to="/"> del {datosEventos.fechaInicio} al {datosEventos.fechaFin}</Link></span></p>
                </div>
                <div className="comprar">
                    {/* <p>{datosEventos.lugar.latitud}</p> */}
                    <a href="#popup"> <button className="boton">Descripción</button></a>

                </div>

            </div>
        </div>
        <PopUp titulo={datosEventos.nombre} descripcion={datosEventos.descripcion} />
        <Nav></Nav>
    </div>
}

export default EventoConcreto;