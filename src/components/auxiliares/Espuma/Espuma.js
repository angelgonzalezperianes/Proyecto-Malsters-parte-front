import React from 'react';
import './Espuma.css'

const Espuma = (props) => {
    const nombreEspuma = props.nombre

    return <div className="Espuma">
        <div className="espumaUp">
            <img className="image" src="http://localhost:3000/Styles/Images/TOP CARD SOLID.svg" />
        </div>
        <div className="espumaBotom">
            <div className="elementos">
                <img className="iconHide" src="http://localhost:3000/Styles/Icons/PERFIL.svg" width="30px" height="30px" />
                <h2 className="parrafo">{nombreEspuma}</h2>
                <img className="icon" src="http://localhost:3000/Styles/Icons/calendar.svg" width="30px" height="30px" />
            </div>
        </div>

    </div>
}


export default Espuma