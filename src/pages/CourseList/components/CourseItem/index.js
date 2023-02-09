import React from "react";
import { StyledListItem } from "./style";
import { ButtonGroup, Button , Col } from "react-bootstrap";

const CourseItem = ({data,onNavigateToEdit,onDelete}) => {
    return (
        <StyledListItem action>
            <Col>
                <h3 className="lead">{data?.title}</h3>
                <p> {data?.description} </p>
            </Col>
            <ButtonGroup>
                <Button variant="primary" onClick={onNavigateToEdit} > Edit</Button>
                <Button variant="danger" onClick={onDelete}> Delete </Button>
                <Button variant="secondary" onClick={() => {}}> Download </Button>
            </ButtonGroup>
        </StyledListItem>
    )
}

export default React.memo(CourseItem)   