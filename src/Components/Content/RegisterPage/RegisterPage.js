import { useRef, useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import SimpleHeader from "../../Headers/HeaderSimple/HeaderSimple";
import "./RegisterPage.css";

export default function RegisterPage() {
  const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PWD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const validEmail = EMAIL_REGEX.test(email);
    console.log(email);
    console.log(validEmail);
    setValidEmail(validEmail);
  }, [email]);

  useEffect(() => {
    const validPwd = PWD_REGEX.test(pwd);
    console.log(pwd);
    console.log(validPwd);
    setValidPwd(validPwd);
  }, [pwd]);

  return (
    <>
      <Container fluid className="RegPageCont">
        <SimpleHeader />
        <div className="RegFormDiv">
          <Form className="RegForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                ref={emailRef}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="btns">
              <Button type="submit">Sign Up</Button>
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
