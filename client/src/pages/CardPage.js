import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Container } from "react-bootstrap";

import Card from "react-bootstrap/Card";



const CardPage = () => {
    const group = { id: 1, name: 'Math for the 1 class', description: "+,-,*,:" }
    const card = [
        { id: 1, question: '2+2', answer: "4" },
        { id: 2, question: '2-2', answer: "0" },
        { id: 3, question: '2*2', answer: "4" },
        { id: 4, question: '2:2', answer: "1" }
    ]
    return (
        <Container>
            <Row className="mt-2">
                <Col md={4}>
                    <h6>{group.name}</h6>
                </Col>
                <Col md={4}>
                    <Row>
                        <h6>Описание: </h6>
                        <div className="md-2">{group.description}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Button >Добавить в избранное</Button>
                </Col>
            </Row>
            <Row className="d-flex">
                {card.map(card =>
                    <Col md={3} className={"mt-3"} >
                        {<Card style={{ width: 150, cursor: 'pointer', border: '1px solid rgba(0, 0, 0, 0.2)', padding: '10px' }} >
                            <div>{card.question}</div>
                            <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                                <div>{card.answer}</div>
                            </div>
                        </Card>}
                    </Col>
                )}
            </Row>
        </Container>

    );
};

export default CardPage;