import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

import BlogCard from '../components/BlogCard'
import LoadingCard from '../components/LoadingCard'
import useFetchPosts from '../hooks/useFetchPosts'


const Projects = ({ prefix, subtitle, title, categories, setProjectDetail }) => {
    const blogEndpoint = `${import.meta.env.VITE_API_ENDPOINT}/posts?categories=${categories}`;
    const { posts, loading, error } = useFetchPosts(blogEndpoint);
    if (loading) {
        const cardPlaceholders = [];
        for (let i=0;i<3;i++) {
            cardPlaceholders.push(
                <Col key={i} xs={12} md={6} lg={4} className="my-3">
                    <LoadingCard/> 
                </Col>
            );
        }
        return (
            <Container id="blog" fluid>
                <Row className={`${prefix} component`}>
                    <section>
                        <h6 className={`${prefix}__subtitle`}>{subtitle}</h6>
                        <h2 className={`${prefix}__title`}>{title}</h2>
                        <Row>
                                {cardPlaceholders.map( placeholder => placeholder )}   
                        </Row>
                    </section>
                </Row>
            </Container>
        )
    }

    if (error) return <div>Erorr: {error} </div>;

    return (
        <Container id="blog" fluid>
            <Row className={`${prefix} component`}>
                <section>
                    <h6 className={`${prefix}__subtitle`}>{subtitle}</h6>
                    <h2 className={`${prefix}__title`}>{title}</h2>
                    <Row>
                    {Object.values(posts || {}).map((post) => (
                        <Col key={post.id} xs={12} className="my-3">
                            <BlogCard post={post}/>
                        </Col>
                    ))}        
                    </Row>
                </section>
            </Row>
        </Container>
    );
}

export default Projects;
