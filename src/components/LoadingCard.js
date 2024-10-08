import Card from "react-bootstrap/Card";
import Placeholder from 'react-bootstrap/Placeholder';
import Button from 'react-bootstrap/Button';
import 'holderjs'

const LoadingCard = () => {
    return (
        <Card className="border-0 rounded-0" style={{ width: '100%' }}>
            <Card.Img className="rounded-0" variant="top" src="holder.js/100px180" />
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
