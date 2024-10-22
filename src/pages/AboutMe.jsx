import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
const AboutMe = () => {
    return(
        <Container id="aboutme" fluid className="">
            <Row className="component component--white aboutme" >
                <section>
                    <h6 className="aboutme__subtitle">MEET SEBASTIAN HERNANDEZ</h6>
                    <h2 className="aboutme__title"> Software Engieneer </h2>
                    <p> With expertise in backend web development and data-driven solutions, he specializes in creating secure, efficient APIs and leveraging data science techniques to solve complex problems. Proficient in technologies like FastAPI, SQLAlchemy, Docker, and advanced data analysis tools, Sebastian excels in database design, server-side optimization, scalability, and machine learning. Bilingual, proactive, and highly communicative, he is dedicated to delivering robust, data-informed solutions tailored to your needs</p>
                <a href="#contact">Get in touch</a>
                </section>
            </Row>
        </Container>
    )
}


export default AboutMe;
