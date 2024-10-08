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
                        <Nav.Link href="#home" className="text-center">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-center">Link</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Row className="banner">
            <Col className="component position-absolute banner__text" xs={7}>
               <h2 className="open-sans-bold">Sebastian Hernandez<br/>Backend Developer</h2> 
                    <p>Python enthusiast mastering artificial intelligence.</p>
                <div>
                <Button variant="success">View projects</Button>{' '}
                </div>
            </Col>
            <Col className="banner__img" xs={12}>
                <img src={banner}/>
            </Col>
            </Row>
        </header>


    );
} 

export default Header;
