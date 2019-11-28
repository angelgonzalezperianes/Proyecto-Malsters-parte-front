import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; /* Nos permite hacer rutas virtuales
de react, el contenedor padre es BrowserRouter y cada ruta concreta es Router */

//IMPORTS DE COMPONENTES PRINCIPALES:
import Home from './components/principales/Home/Home'
import CervezaConcreta from './components/principales/CervezaConcreta/CervezaConcreta';
import EventoConcreto from './components/principales/EventoConcreto/EventoConcreto';
import ProductoRegistrado from './components/principales/ProductoRegistrado/ProductoRegistrado';
import RegistroCerveza from './components/principales/RegistroCerveza/RegistroCerveza';
import RegistroUsuario from './components/principales/RegistroUsuarios/RegistroUsuario';
import UsuarioRegistrado from './components/principales/UsuarioRegistrado/UsuarioRegistrado';
import VistaCervezas from './components/principales/VistaCervezas/VistaCervezas';
import VistaEventos from './components/principales/VistaEventos/VistaEventos';
import popUp from './components/auxiliares/PopUp/popUp';
import Sercher from './components/auxiliares/Sercher/sercher';



import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/cervezas" component={VistaCervezas} />
      <Route exact path="/cerveza/:id" component={CervezaConcreta} />
      <Route exact path="/eventos" component={VistaEventos} />
      <Route exact path="/evento/:id" component={EventoConcreto} />
      <Route exact path="/registrocerveza" component={RegistroCerveza} />
      <Route exact path="/UsuarioRegistrado" component={UsuarioRegistrado}/>
      <Route exact path="/buscador" component={Sercher}/>
      <Route exact path="/registrousuario" component={RegistroUsuario}/>
      <Route exact path="/productoregistrado" component={ProductoRegistrado} />
      <Route exact path="/popup" component={popUp} />
      <Route exact path="/cerveza404" component={Home} />
    </Router>
  );
}
export default App;
