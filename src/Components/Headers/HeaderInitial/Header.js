import { Container, Button } from "react-bootstrap";
import "./Header.css";

export default function Header() {
  return (
    <>
      <Container className="HeaderContainer" fluid>
        <div className="TitleDiv">
          <h2 className="Title">LinkStats</h2>
        </div>
        <div>
          <Button className="LoginBtn" variant="outline-primary">
            Login
          </Button>{" "}
          <Button href="/Register" className="SignUpBtn" variant="outline-primary">
            Sign Up
          </Button>{" "}
        </div>
      </Container>
    </>
  );
}
