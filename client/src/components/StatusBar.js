/*
import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const StatusBar = observer(() => {
    const { card } = useContext(Context)
    return (
        <ListGroup>
            {card.status.map(status =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={status.id === card.selectedStatus.id}
                    onClick={() => card.setSelectedStatus(status)}
                    key={status.id}
                >
                    {status.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default StatusBar;
*/
