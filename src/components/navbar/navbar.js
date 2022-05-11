import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">Bairro Seguro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/contas">Contas</Nav.Link>
                <Nav.Link href="/usuarios">Usuários</Nav.Link>
                {/* <Nav.Link href="#link">Configurações</Nav.Link> */}
            </Nav>
            <Nav className="right-nav">
                <Nav.Link href="#link">Sair</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;