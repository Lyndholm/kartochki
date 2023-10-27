import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { CARD_ROUTE } from "../utils/consts";

const CardGroupItem = ({ cardGroup }) => {
    const history = useNavigate()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history(CARD_ROUTE + '/' + cardGroup.id)}>
            {<Card style={{ width: 150, cursor: 'pointer', border: '1px solid rgba(0, 0, 0, 0.2)', padding: '10px' }} >
                <div>{cardGroup.name}</div>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{cardGroup.description}</div>
                </div>
            </Card>}
        </Col>
    );
};

export default CardGroupItem;