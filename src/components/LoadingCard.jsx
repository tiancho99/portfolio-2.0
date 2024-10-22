import { useEffect } from 'react';
import Card from "react-bootstrap/Card";
import Placeholder from 'react-bootstrap/Placeholder';

const LoadingCard = () => {
    return (
        <Card className="border-0 rounded-0" style={{ width: '100%' }}>
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
        </Card>
    );
}

export default LoadingCard;
