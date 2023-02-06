import React from "react";
import { ButtonGroup , Form , Button } from "react-bootstrap";
import FormInput from "../../components/FormInput";
import { StyledContainer,StyledTitle } from "./style";
import useAddCourseState from "./useAddCourseState";

const FORM_LIST = [
    { id:"title", label:"Title",type:"text",placeholder:"Enter Course Title"},
    { id:"description", label:"Description",type:"textarea",placeholder:"Enter Course Description"},
    { id:"typeId", label:"Type id",type:"text",placeholder:"Enter Course Type Id"},
    { id:"courseFile", label:"Course Material",type:"file",placeholder:"Choose Course Material"},
    { id:"level", label:"Level",type:"text",placeholder:"Enter Course Level"},
    { id:"duration", label:"Duration",type:"text",placeholder:"Enter Course Duration"},
]

const AddCourse = () => {
    const{getter,setter} = useAddCourseState();

    return (
        <StyledContainer>
            <StyledTitle>AddCourse</StyledTitle>
            <Form>
                {
                    FORM_LIST.map(item => (
                        <FormInput 
                            label={item.label}
                            type={item.type}
                            value={getter[item.id]}
                            onChange={setter[item.id]}
                            placeholder={item.placeholder}
                        />
                    ))
                }

                <ButtonGroup>
                    <Button variant="success">
                        Submit
                    </Button>

                    <Button variant="secondary">
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse