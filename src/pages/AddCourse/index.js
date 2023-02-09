import React from "react";
import { 
    ButtonGroup , Form , Button 
} from "react-bootstrap";
import { connect } from "react-redux";

import {StyledContainer,FormInput} from "../../components";
import { addCourse } from "../../store/actions/courseAction";
import constants from "../../constants";

import { StyledTitle } from "./style";
import useAddCourseState from "./useAddCourseState";

const FORM_LIST = [
    { id:"title", label:"Title",type:"text",placeholder:"Enter Course Title"},
    { id:"description", label:"Description",type:"textarea",placeholder:"Enter Course Description"},
    { id:"courseTypeId", label:"Type id",type:"text",placeholder:"Enter Course Type Id"},
    { id:"courseFile", label:"Course Material",type:"file",placeholder:"Choose Course Material"},
    { id:"level", label:"Level",type:"text",placeholder:"Enter Course Level"},
    { id:"duration", label:"Duration",type:"text",placeholder:"Enter Course Duration"},
]

const AddCourse = ({
    addCourse,onNavigate
}) => {
    const{getter,setter} = useAddCourseState();

    const submitHandler = () => {
        addCourse(getter)
        onNavigate(constants.ROUTES.COURSE_LIST)
    }

    return (
        <StyledContainer>
            <StyledTitle>Add Learning Course</StyledTitle>
            <Form>
                {
                    FORM_LIST.map(item => (
                        <FormInput 
                            label={item.label}
                            type={item.type}
                            value={getter[item.id]}
                            onChange={setter[item.id]}
                            placeholder={item.placeholder}
                            key={item.id}
                        />
                    ))
                }

                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>

                    <Button variant="secondary" onClick={() => onNavigate(constants.ROUTES.COURSE_LIST)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addCourse: course => dispatch(addCourse(course))
})

export default connect(null,mapDispatchToProps)(AddCourse)