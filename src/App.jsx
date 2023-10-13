import { BrowserRouter , Routes, Route} from "react-router-dom"
import {  CartContextProvider } from './Context/CartContext';

import NavBar from './Componentes/NavBar/NavBar';
import Footer from './Componentes/Footer/Footer'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from "./Componentes/CartContainer/CartContainer";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
      <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:cid' element={<ItemListContainer />} />
          <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={ <CartContainer /> } /> 
        </Routes>
        <Footer />
        </CartContextProvider>
      </BrowserRouter>
  )
}

export default App
