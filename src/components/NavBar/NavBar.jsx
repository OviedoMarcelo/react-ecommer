import React from "react";
import "./Navbar.css";
import Container from 'react-bootstrap/Container';
import logo from '../../logo.svg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";


export const NavBar = () => {
    return (

        <Navbar expand="lg" className="Navbar">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Todos los productos</Nav.Link>
                        <Nav.Link href="/category/celular">Celulares</Nav.Link>
                        <Nav.Link href="/category/tablet">Tablet</Nav.Link>
                    </Nav>
                    <Nav.Link href="/cart"><CartWidget /></Nav.Link>
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