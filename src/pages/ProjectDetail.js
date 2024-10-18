import Container from 'react-bootstrap/Container'
import MyNavbar from '../components/MyNavbar.js';
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails.js'


const ProjectDetail = () => {
    const { postId }= useParams();

    const { detail, loading, error } = useFetchDetails(postId);

    if(loading) return <div>Loading</div>
    if(error) return <div>Error</div>
    return (
        <Container className="post">
            <h1 className="post__title">{detail.title.rendered}</h1>
            <div className="post__content"
                dangerouslySetInnerHTML={{__html: detail.content.rendered}}
            >
            </div>
                
        </Container>
    );
}

export default ProjectDetail;
