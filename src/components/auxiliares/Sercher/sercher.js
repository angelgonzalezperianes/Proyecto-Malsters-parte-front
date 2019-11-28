import React, { useState } from 'react';
import './sercher.css';
import { Link } from 'react-router-dom'



function Sercher(props) {
    // console.log(props)
    const url = `http://localhost:4000/buscador/`

    const [existenDatos, setExistenDatos] = useState(false)
    const [state, setState] = useState({
        input: [],
        cerveza: []
    })


    

    const las2Cosas = (e) => {
        try {
            setState({ ...state, input: e.target.value });
            fetch(url + e.target.value).then(
                res => res.json()
            ).then(data => {
                if (data !== null) {
                    setState({ cerveza: data })
                    setExistenDatos(true)
                } else {
                    setState({ cerveza: { _id: "404" } })

                }
                // props.history.push(`cerveza/${state.dato._id}`);
                // props.history.push(`cerveza/${state.dato._id}`)
                // window.location=`cerveza/${data._id}`;
                // return <Redirect to={`cerveza/${state.dato._id}`} />
                console.log(state.cerveza)
            }
            )
        }
        catch (error) {
            console.log(error)
        }


    }
    const Buscador = (evento) => {

        evento.preventDefault()

    }


    return <div className="bloqueBuscador">
        <div className="triBloque">
            <Link to="/registrousuario">
                <img className="iconsNav" src="http://localhost:3000/Styles/Icons/personas.svg" width="40px" height="40px" />
            </Link>
        </div>
        <div className="triBloque">
            <form className="for" onSubmit={Buscador}>
                {existenDatos == true && <Link to={`cerveza/${state.cerveza._id}`}>
                    <button className="bus"><img className="lupa" src="http://localhost:3000/Styles/Icons/search.svg" width="40px" height="40px" /></button></Link>}
                {existenDatos == false && <button className="bus"><img className="lupa" src="http://localhost:3000/Styles/Icons/search.svg" width="40px" height="40px" /></button>}

                <input className="buscador" type="text" required="required" placeholder="Busca tu cerveza!" value={state.input} onChange={las2Cosas} />
            </form>
        </div>

        {/* <input className="boton" type="button" src="http://localhost:3000/Styles/Icons/search.svg" alt="Busca cervezas, eventos..." /> */}
        <div className="triBloque">
            <Link to="/registrocerveza">
                <img className="iconsNav" src="http://localhost:3000/Styles/Icons/barcode.svg" width="40px" height="40px" />
            </Link>
        </div>
    </div>



}


export default Sercher;