import React from "react";
import { Container , Navbar , Button } from "react-bootstrap";
import { useNavigate,NavLink } from "react-router-dom";

import { StyleNav  } from "./styles";
import constants from "../../constants";
import { removeToken } from "../../utils/token";

const menu = [
    {path: constants.ROUTES.COURSE, menuName:"Course"},
    {path: constants.ROUTES.COURSE_TYPE, menuName:"Course Type"},
]

const NavBarComp = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        removeToken()
        navigate(constants.ROUTES.LOGIN)
    }

    return(
       <Navbar 
            bg="light" 
            expand="light" 
            sticky={"top"}
        >
            <Container>
                    <Navbar.Brand>
                        Enigma Course
                    </Navbar.Brand>
                    <StyleNav>
                        {menu?.map((item,index) => (
                            <NavLink
                                to={item.path}
                                className="nav-link mx-3"
                                key={index}
                            >
                                {item.menuName}
                            </NavLink>
                        ))}
                        <Button 
                            variant="outline-danger"
                            onClick={onLogout}
                        >
                            LogOut
                        </Button>
                    </StyleNav>
            </Container>
       </Navbar>
    )
}

export default NavBarComp;