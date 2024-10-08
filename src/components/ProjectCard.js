import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'


const ProjectCard = ({ project }) => {
    return (
        <Card className="border-0 rounded-0"  style={{width: '100%'}}>
            <Card.Img className="rounded-0" variant="top" src={project.project_thumbnail || ""}/>
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

export default ProjectCard;
