import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'


const BlogCard = ({ post }) => {
    return (
        <Card className="blog__card border-1 rounded-0"  style={{width: '100%'}}>
            <Container fluid className="justify-content-center">
                <Row className="p-5">
                    <Col xs="3">
                        <Card.Img
                            className="blog__thumbnail rounded-0"
                            src={post.project_thumbnail}
                        />
                    </Col>
                    <Col xs="9 d-flex align-items-center">
                        <Card.Body>
                            <Card.Title>{post.title.rendered}</Card.Title>
                            <Card.Text>
                                {post.excerpt.rendered.replace("<p>", "").replace("</p>","")}
                            </Card.Text>
                            <Button variant="primary">Read post</Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </Card>
    );
}

export default BlogCard;
