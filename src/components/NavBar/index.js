import React from "react";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import logo from '../../logo.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/Index";

export const NavBar = () => {
    return (

        <Navbar expand="lg" className="Navbar">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Productos</Nav.Link>
                        <Nav.Link href="#link">Contacto</Nav.Link>
                        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
                    </Nav>
                    <CartWidget CartElement={0} />
                    <NavDropdown title="Usuario x" d="basic-nav-dropdown" className="p-3">
                        <NavDropdown.Item href="#action/3.1">Mi Perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mi historial</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4"> Cerrar sesión </NavDropdown.Item>
                    </NavDropdown>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default NavBar;