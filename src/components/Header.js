import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import banner from '../assets/banner.jpg'
    
const Header = () => {
    const URL = process.env.REACT_APP_BASE_ENDPOINT;
    return(
        <header className="">
            <Container fluid>
                <Row className=" banner align-items-center">
                    <Col className="banner__text">
                        <h2 className="open-sans-bold">Sebastian Hernandez<br/>Backend Developer</h2> 
                        <p>Python enthusiast mastering artificial intelligence.</p>
                        <a
                            href={`#projects`}
                            className="btn btn-success"
                            role="button"
                        >View projects</a>
                    </Col>
                    <img className="banner__img" src={banner} alt="banner__image"/>
                    <div className="banner__overlay"></div>

                </Row>
            </Container>
        </header>


    );
} 

export default Header;
