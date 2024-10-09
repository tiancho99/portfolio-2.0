import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import MyNavbar from '../components/MyNavbar.js'
import banner from '../assets/banner.jpg'
    
const Header = () => {
    return(
        <header>
            <MyNavbar />
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
