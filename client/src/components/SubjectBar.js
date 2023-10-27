import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const SubjectBar = observer(() => {
    const { cardGroup } = useContext(Context)
    return (
        <ListGroup>
            {cardGroup.subject.map(subject =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={subject.id === cardGroup.selectedSubject.id}
                    onClick={() => cardGroup.setSelectedSubject(subject)}
                    key={subject.id}
                >
                    {subject.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default SubjectBar;