import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import SimpleHeader from "../../Headers/HeaderSimple/HeaderSimple";
import "./RegisterPage.css";

export default function RegisterPage() {
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PWD_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

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

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const emailCheck = EMAIL_REGEX.test(email);
  //   const pwdCheck = EMAIL_REGEX.test(pwd);
  //   if (!emailCheck || !pwdCheck) {
  //     setErrMsg("Invalid Entry");
  //     return;
  //   }

  // };

  return (
    <>
      <Container fluid className="RegPageCont">
        <SimpleHeader />
        <div className="RegFormDiv">
          <Form action="http://localhost:3000/" className="RegForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <span className={validEmail ? "show checkGreen" : "hide"}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              <span className={validEmail || !email ? "hide" : "show crossRed"}>
                <FontAwesomeIcon icon={faTimesCircle} />{" "}
              </span>
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

            <Form.Group
              className={validPwd || !pwd ? "mb-3 pwdDiv" : "pwdDiv"}
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <span className={validPwd ? "show checkGreen" : "hide"}>
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              <span className={validPwd || !pwd ? "hide" : "show crossRed"}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </span>
              <Form.Control
                required
                onChange={(e) => setPwd(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <span className={validPwd || !pwd ? "hide" : "show pwdInfoSpan"}>
                <div className="pwdInfoDiv">
                  <div className="pwdInfoIconDiv">
                    <FontAwesomeIcon
                      className="pwdInfoIcon"
                      icon={faExclamationCircle}
                    />
                  </div>
                  <div>
                    - 7 to 15 characters. <br />- Must include uppercase and
                    lowercase letters, a number and a special character.
                  </div>
                </div>
              </span>
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
