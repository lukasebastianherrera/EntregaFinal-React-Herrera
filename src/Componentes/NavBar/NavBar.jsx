import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Muebleria Arce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#action2">Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/muebles">Muebles</NavDropdown.Item>
              <NavDropdown.Item href="/category/tecnologia">
                Tecnologia
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Lorem ipsum :p
              </NavDropdown.Item>
            </NavDropdown>
            <CartWidget />
          </Nav>
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