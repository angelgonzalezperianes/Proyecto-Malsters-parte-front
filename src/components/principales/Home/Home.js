import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './Home.css';
import Nav from '../../auxiliares/Nav/Nav'
import SliderContainer from '../../auxiliares/SliderContainer/SliderContainer'
import SliderContainerSmall from '../../auxiliares/SliderContainerSmall/SliderContainerSmall';
import Sercher from '../../auxiliares/Sercher/sercher'
import axios from 'axios'
import EddySliderContainerMedium from '../../auxiliares/SliderContainerMedium/EddySliderContainerMedium';



function Home() {
    const [estadoEventos, setEstadoEventos] = useState({ data: [] });
    const [estadoCervezas, setEstadoCervezas] = useState({ data: [] });
    /**recupero desde bdd */
    useEffect(() => {
        axios.get("http://localhost:4000/eventos")
            .then(datos => setEstadoEventos({ data: datos.data }));
        axios.get("http://localhost:4000/cervezas")
            .then(datos => setEstadoCervezas({ data: datos.data }));

    }, []);
    return <div className="home">
        <div className="LogoHome">
                <img className="logoH" src="http://localhost:3000/Styles/Images/LOGO-MALSTERS copy.svg" />
            </div>
        <div><Sercher /></div>
        <div className="Ascensor">
            <EddySliderContainerMedium datos={estadoEventos.data} rutaHeredada={'evento/'} bgSize={'cover'} widthData={'300px'} srcIcono={"http://localhost:3000/Styles/Icons/event.svg"}/>
            <EddySliderContainerMedium datos={estadoCervezas.data} rutaHeredada={'cerveza/'} bgSize={'auto'} widthData={'200px'} srcIcono={"http://localhost:3000/Styles/Icons/beer.svg"}/>
        </div>
        <Nav></Nav>


    </div>
}

export default Home;




// function Home() {
//     //Debemos definir el state para pasarle props a SliderContainer y a SliderContainerSmall

//     // axios.get('http://localhost:4000')

//     return (
//         <div>


//             <div className="home">
//                 <div><Sercher /></div>
//                 <div className="Ascensor">
//                     <SliderContainer
//                         //Aquí todos los props que necesitamos que nos lo pasa el BACK
//                         card1={"http://placeimg.com/640/480/animals"}
//                         cardFooter1={'SOY EL TITULO DE UN EVENTO'}
//                         card2={"http://placeimg.com/640/480/arch"}
//                         cardFooter2={'EVENTO 2'}
//                         card3={"http://placeimg.com/640/480/nature"}
//                         cardFooter3={'EVENTO 3'}
//                         card4={"http://placeimg.com/640/480/people"}
//                         cardFooter4={'EVENTO 4'}
//                         card5={"http://placeimg.com/640/480/tech"}
//                         cardFooter5={'EVENTO 5'}
//                     />

//                     <SliderContainerSmall
//                         card1={"https://loremflickr.com/320/240/drink"}
//                         cardFooter1={'NOMBRE CERVEZA'}
//                         card2={"https://loremflickr.com/320/240/beer"}
//                         cardFooter2={'Cerveza 2'}
//                         card3={"https://loremflickr.com/320/240/glass"}
//                         cardFooter3={'Cerveza 3'}
//                         card4={"https://loremflickr.com/320/240/people"}
//                         cardFooter4={'Cerveza 4'}
//                         card5={"https://loremflickr.com/320/240/bar"}
//                         cardFooter5={'Cerveza 5'} />
//                 </div>
//             </div>
//             <Nav />
//         </div>);
// }

// export default Home;





//TEMPLATE 