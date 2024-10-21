import Card from "react-bootstrap/Card"


const ProjectCard = ({ post }) => {
    return (
        <Card className="border-0 rounded-0"  style={{width: '100%'}}>
            <Card.Img
                className="projects__thumbnail rounded-0"
                variant="top"
                src={post.project_thumbnail}
            />
            <Card.Body>
                <Card.Title>{post.title.rendered}</Card.Title>
                <Card.Text dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>
                </Card.Text>
                <a
                    href={`/project/${post.id}`}
                    className="btn btn-primary"
                    role="button"
                >View project</a>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
