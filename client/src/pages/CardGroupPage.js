import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SubjectBar from "../components/SubjectBar";
import CardGroupList from "../components/CardGroupList";

const CardGroupPage = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <SubjectBar />
                </Col>
                <Col md={9}>
                    <CardGroupList />
                </Col>
            </Row>
        </Container>
    );
};

export default CardGroupPage;