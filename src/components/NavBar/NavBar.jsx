import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../logo.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";



export const NavBar = () => {
    return (

        <Navbar expand="lg" className="Navbar">
            <Container fluid>
                <Navbar.Brand>
                    <NavLink to={'/'}>
                    <img src={logo} className="App-logo" alt="logo" />
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <NavLink to={'/'}>Todos los productos</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={'/category/maceta'}>Macetas</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to={'/category/planta'}>Plantas</NavLink>
                        </Nav.Link>
                    </Nav>
                    <Nav.Link>
                        <CartWidget />
                    </Nav.Link>
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