import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="footer component">
                    <Col>
                        Made with love by Sebastian Hernandez
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

 export default Footer;
