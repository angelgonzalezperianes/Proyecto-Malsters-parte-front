import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css'



const Nav = () => {

    return <div className="navigation">
        <nav className="navDirection">
            <Link to="/eventos">
                <img className="iconsNav" src="http://localhost:3000/Styles/Icons/event.svg" width="40px" height="40px" />
            </Link>
            <img className="iconsNav" src="http://localhost:3000/Styles/Icons/culture.svg" width="40px" height="40px" />
            <Link to="/">
            <img className="iconsNav" src="http://localhost:3000/Styles/Icons/arrowup.svg" width="40px" height="40px" />
            </Link>
            <Link to="/cervezas">
                <img className="iconsNav" src="http://localhost:3000/Styles/Icons/beer pint.svg" width="40px" height="40px" />
            </Link>
            <img className="iconsNav" src="http://localhost:3000/Styles/Icons/gastro.svg" width="40px" height="40px" />
        </nav>
    </div>
}


export default Nav