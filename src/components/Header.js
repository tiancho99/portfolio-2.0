import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

import banner from '../assets/banner.jpg'
import { useState } from "react";
    
const Header = () => {
    const [collapsed, setCollapsed] = useState(true);

    const handleToggle = () => {
        setCollapsed(!collapsed);
    }

    return(
        <header>
             <Navbar expand="lg" className="bg-body-tertiary" onToggle={handleToggle}>
                <Container className="open-sans-normal">
                    <Navbar.Brand href="#home" className={`navbar-brand fw-bolder`}>&gt;_ Sebastian Hernandez</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 ms-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="">
                      <Nav className="me-auto">
                        <Nav.Link href="#aboutme" className="text-center">About me</Nav.Link>
                        <Nav.Link href="#projects" className="text-center">Projects</Nav.Link>
                        <Nav.Link href="#blog" className="text-center">Blog</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid className="pe-0">
                <Row className="banner component">
                    <Col className="banner__text align-content-center component">
                       <h2 className="open-sans-bold">Sebastian Hernandez<br/>Backend Developer</h2> 
                            <p>Python enthusiast mastering artificial intelligence.</p>
                        <Button variant="success">View projects</Button>
                    </Col>
                    <img className="banner__img" src={banner} alt="banner__image"/>
                </Row>
            </Container>
        </header>


    );
} 

export default Header;
