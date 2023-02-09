import React from "react";
import { Container , Navbar , NavLink } from "react-bootstrap";

import { StyleNav  } from "./styles";

const NavBarComp = ({menu}) => (
    <Navbar 
        bg="light"
        expand="light"
        sticky={"top"}
    >
        <Container>
            <Navbar.Brand>Enigma Course</Navbar.Brand>
                <StyleNav>
                    {menu?.map((item,index) => (
                        <NavLink
                            onClick={item.onNavigate}
                            className="nav-link mx-3" 
                            key={index}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </StyleNav>
        </Container>
    </Navbar>
)

export default NavBarComp;