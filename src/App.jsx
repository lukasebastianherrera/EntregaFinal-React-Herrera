import { useState } from 'react'

import NavBar from './Componentes/NavBar/NavBar';
import Titulo from './Componentes/TItulo/Titulo'
import Footer from './Componentes/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/Counter/ItemCount';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';



function App() {

  const titulo = "Soy un titulo APP"
  const subtitulo = "Soy un subtitulo APP"

  return (
    <div>
      <NavBar />
      <Titulo titulo={titulo} subtitulo={subtitulo} />
      <ItemListContainer saludo="Hola soy un SALUDO, buenos dias señor" />
      <ItemDetailContainer />
      <Footer />
    </div>
  )
}

export default App
