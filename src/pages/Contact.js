import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return(
        <section className="contact">
            <h6 className="contact__subtitle">GET IN TOUCH</h6>
            <h2 className="contact__title">Let's discuss your project</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name<span className="form__star--required">*</span></Form.Label>
                <Form.Control type="name" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address<span className="form__star--required">*</span></Form.Label>
                <Form.Control type="email" placeholder="" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone number<span className="form__star--required">*</span></Form.Label>
                <Form.Control type="number" placeholder="" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I allow this website to store my submission so they can respond to my inquiry*"  required />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        </section>
    );

}

export default Contact;
