import Card from "react-bootstrap/Card"


const ProjectCard = ({ project }) => {
    return (
        <Card className="border-0 rounded-0"  style={{width: '100%'}}>
            <Card.Img className="rounded-0" variant="top" src={project.project_thumbnail || ""}/>
            <Card.Body>
                <Card.Title>{project.title.rendered}</Card.Title>
                <Card.Text>
                    {project.excerpt.rendered.replace("<p>", "").replace("</p>","")}
                </Card.Text>
                <a href={project["_links"].self[0].href} className="btn btn-primary" role="button">Go to project</a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
