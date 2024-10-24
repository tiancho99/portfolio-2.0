import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card"


const BlogCard = ({ post }) => {
    return (
        <Card className="blog__card border-1 rounded-0"  style={{width: '100%'}}>
            <Container fluid className="align-items-center">
                <Row className="p-5 justify-content-center">
                    <Col xs="11" md="5" className="d-flex align-items-center">
                        <Card.Img
                            className="blog__thumbnail rounded-0"
                            src={post.project_thumbnail}
                        />
                    </Col>
                    <Col xs="12" md="7" className="d-flex align-items-center">
                        <Card.Body>
                            <Card.Title>{post.title.rendered}</Card.Title>
                            <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
                            <a
                                href={`/project/${post.id}`}
                                className="btn btn-primary"
                                role="button"
                            >Go to project</a>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default BlogCard;
