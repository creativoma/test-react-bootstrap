import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#inicio">Inicio</Nav.Link>
                <Nav.Link href="#link-1">Link 1</Nav.Link>
                <Nav.Link href="#link-2">Link 2</Nav.Link>
                <Nav.Link href="#link-3">Link 3</Nav.Link>
            <NavDropdown title="Desplegable" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Acción 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Acción 2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Acción 3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Acción 4</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;