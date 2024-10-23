import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

const CustomNavbar = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#fooldal">
                    Almáskertek
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#termesfelism">Termés Felismerés</Nav.Link>
                        <Nav.Link href="#szureteles">Szüretelés</Nav.Link>
                        <Nav.Link href="#logisztika">Logisztika</Nav.Link>
                        <Nav.Link href="#koltsegek">Költségek</Nav.Link>
                        <Nav.Link href="#adaptacio">Adaptáció</Nav.Link>
                        <Nav.Link href="#etikaikerdesek">Etikai Kérdések</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;