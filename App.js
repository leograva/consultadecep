import React from 'react';
import Formulario from './componentes/Formulario'
import Mensagem from './componentes/Mensagem'
import './App.css';

function App(props) {

  return (
    <div>
    <Formulario />
    <Mensagem texto={props.valor}/>
    </div>
  );
}

export default App;