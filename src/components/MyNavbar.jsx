import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { useState } from "react";

const MyNavbar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    }

    const URL = import.meta.env.VITE_BASE_ENDPOINT;

    return (
         <Navbar expand="lg" className="bg-body-tertiary" onToggle={handleToggle}>
            <Container className="open-sans-normal">
                <Navbar.Brand href={`${URL}/`} className={`navbar-brand fw-bolder`}>&gt;_ Sebastian Hernandez</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 ms-auto" />
                <Navbar.Collapse id="basic-navbar-nav" className="">
                  <Nav className="ms-auto">
                    <Nav.Link href={`${URL}/#aboutme`} className="text-center">About me</Nav.Link>
                    <Nav.Link href={`${URL}/#projects`} className="text-center">Projects</Nav.Link>
                    <Nav.Link href={`${URL}/#blog`} className="text-center">Blog</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
         </Navbar>
    );
}

export default MyNavbar;
