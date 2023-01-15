import { Container, Form, Button } from "react-bootstrap";
import SimpleHeader from "../../Headers/HeaderSimple/HeaderSimple";
import "./RegisterPage.css";

export default function RegisterPage() {
  return (
    <>
      <Container fluid className="RegPageCont">
        <SimpleHeader />
        <div className="RegFormDiv">
          <Form className="RegForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="btns">
              <Button type="submit">
                Sign Up
              </Button>
              <Button href="/" type="button">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}
