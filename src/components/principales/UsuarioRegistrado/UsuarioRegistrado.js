import React from 'react';
import {Link} from 'react-router-dom'; //PARA PODER HACER LINKS DE SPA NO BORRAR!
import './UsuarioRegistrado.css';




function UsuarioRegistrado(){
    
    return <main className="contenedorcito">
           <header className="cajitaLogo">
                <img className="logoPrincipal" src="http://localhost:3000/Styles/Images/LOGO MALSTERS.svg"/>
           </header>

           <div className="cajaRegistrado">
                <h2>USUARIO REGISTRADO EXITOSAMENTE</h2>
                <div className="cajaCerveza">
                    <img className="botellaCerve" src="http://localhost:3000/Styles/Images/cuerpo.png" alt="cerveza"/>
                    <img className="confeti" src="http://localhost:3000/Styles/Images/confeti dorado.png"/>
                </div> 
                <div className="otraCaja">
                    <h4>Muchas Gracias.</h4>
                    <p className="marginSup"></p>
                    <img id="favorito" className="favCerve marginSup" onClick="favoritificacion" src="http://localhost:3000/Styles/Icons/favoriteEmpty.svg"></img>
                </div>   
                <div className="enlaceVuelta">
                    <Link className="enlaceEnSi" to="/">Ir a la HOME</Link>
                </div>  
           </div>
           
          
        </main>
    
}

export default UsuarioRegistrado;