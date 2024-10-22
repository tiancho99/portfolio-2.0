import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom';
import useFetchDetails from '../hooks/useFetchDetails'

import '../styles/post.css'


const ProjectDetail = () => {
    const { postId }= useParams();
    const { detail, loading, error } = useFetchDetails(postId);

    const loadingPlaceholders = []
    for(let i=0;i<10;i++) {
        loadingPlaceholders.push(<span key={i} className="placeholder col-12"></span>);
    }

    if(loading) {
        return (
            <Container className="post">
                <h1>
                <span className="placeholder col-6"></span>
                </h1>
                <p className="placeholder-glow">
                    {loadingPlaceholders.map((placeholder) => {
                        return placeholder
                    })}
                </p>
            </Container>
        );
    }
    if(error) return <div>Error</div>

    const { mediaDetails } = detail;
    const { sizes } = mediaDetails;
    const srcSet = [
        sizes.medium ? `${sizes.medium.source_url} ${sizes.medium.width}w` : null,
        sizes.thumnail? `${sizes.thumbnail.source_url} ${sizes.thumbnail.width}w` : null,
        sizes.large? `${sizes.large.source_url} ${sizes.large.width}w` : null,
        sizes.medium_large ? `${sizes.medium_large.source_url} ${sizes.medium_large.width}w` : null,
        sizes["1536x1536"]? `${sizes["1536x1536"].source_url} ${sizes["1536x1536"].width}w` : null,
        sizes["2048x2048"]? `${sizes["2048x2048"].source_url} ${sizes["2048x2048"].width}w` : null,
        sizes.full ? `${sizes.full.source_url} ${sizes.full.width}w` : null,
    ]
        .filter(Boolean)
        .join(', ')

    const src = sizes.medium ? sizes.medium.source_url : '';

    return (
        <Container className="post">
            <figure className="post__frontpage text-center">
                <img
                    src={src}
                    alt="sizes"
                    srcset={srcSet}
                    sizes="(max-width: 1925px) 100vw, 1925px"
                />
            </figure>
            <h1 className="post__title">{detail.title.rendered}</h1>
            <div className="post__content"
                dangerouslySetInnerHTML={{__html: detail.content.rendered}}
            >
            </div>
                
        </Container>
    );
}

export default ProjectDetail;
