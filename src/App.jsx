import { useState } from 'react'

import NavBar from './Componentes/NavBar/NavBar';
import Titulo from './Componentes/TItulo/Titulo'
import Footer from './Componentes/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';



function App() {
  const [numeroSuma, funcionSumar] = useState(0)

  const titulo = "Soy un titulo APP"
  const subtitulo = "Soy un subtitulo APP"

  const añadirSuma = () => {
    funcionSumar(numeroSuma + 1)
  }
  return (
    <div>
      <NavBar />
      <Titulo titulo={titulo} subtitulo={subtitulo} />
      {numeroSuma}
      <button onClick={añadirSuma} className="bg-dark"> + </button>
      <ItemListContainer saludo="Hola soy un SALUDO, buenos dias señor" />
      <Footer />
    </div>
  )
}

export default App
