import React, { useContext } from 'react';
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { ADMIN_ROUTE, CARD_GROUP_ROUTE, PERSONAL_PAGE_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={CARD_GROUP_ROUTE}>КартГруп</NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} className="ms-3"
                            onClick={() => history(ADMIN_ROUTE)}>
                            +
                        </Button>
                        <Button variant={"outline-light"} className="ms-3"
                            onClick={() => history(PERSONAL_PAGE_ROUTE)}>
                            Профиль
                        </Button>
                        <Button variant={"outline-light"} className="ms-3"
                            onClick={() => user.setIsAuth(false)}>
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)} >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;