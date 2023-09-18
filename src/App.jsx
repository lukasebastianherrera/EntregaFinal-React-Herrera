import { useState } from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom"

import NavBar from './Componentes/NavBar/NavBar';
import Titulo from './Componentes/TItulo/Titulo'
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemCount from './Componentes/Counter/ItemCount';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const titulo = "Soy un titulo APP"
  const subtitulo = "Soy un subtitulo APP"

  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
