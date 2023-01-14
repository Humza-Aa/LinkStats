import { Container } from "react-bootstrap";
import "./HeaderSimple.css";

export default function SimpleHeader() {
    return(
        <Container fluid className="SimpleHeaderCont">
            <div>
                <h2>
                    LinkStats
                </h2>
            </div>
        </Container>
    )
}