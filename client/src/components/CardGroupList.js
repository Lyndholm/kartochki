import React, { useContext } from 'react';
import { Context } from "../index";
import Row from "react-bootstrap/Row";
import CardGroupItem from "./CardGroupItem";

const CardGroupList = () => {
    const { cardGroup } = useContext(Context)
    return (
        <Row className="d-flex">
            {cardGroup.groups.map(cardGroup =>
                <CardGroupItem key={cardGroup.id} cardGroup={cardGroup} />
            )}
        </Row>
    );
};

export default CardGroupList;