import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'


const BlogCard = ({ project }) => {
    return (
        <Card className="border-1 rounded-0"  style={{width: '100%'}}>
            <Card.Body>
                <Card.Title>{project.title.rendered}</Card.Title>
                <Card.Text>
                    {project.excerpt.rendered.replace("<p>", "").replace("</p>","")}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;
