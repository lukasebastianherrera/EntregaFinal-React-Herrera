import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import { useCartContext } from '../../Context/CartContext';

function NavBar() {
  const {totalQuantity} = useCartContext()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Muebleria Arce</Navbar.Brand>
        <Link className='m-2' to="/">Home</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='me-auto'>
          <NavLink className={({isActive})=>isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2' } to='/category/muebles'>Muebles</NavLink>
          <NavLink className={({isActive})=>isActive ? 'btn btn-primary m-2' : 'btn btn-outline-primary m-2'} to="/category/tecnologia">tecnologia</NavLink>
          </Nav>
          <Nav><Link to="/cart" className='m-2'> 🛒 {totalQuantity()} </Link></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="🔍"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar