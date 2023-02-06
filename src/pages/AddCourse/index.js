import React from "react";
import { ButtonGroup , Form , Button } from "react-bootstrap";
import {StyledContainer,FormInput} from "../../components";
import { StyledTitle } from "./style";
import useAddCourseState from "./useAddCourseState";

const FORM_LIST = [
    { id:"title", label:"Title",type:"text",placeholder:"Enter Course Title"},
    { id:"description", label:"Description",type:"textarea",placeholder:"Enter Course Description"},
    { id:"typeId", label:"Type id",type:"text",placeholder:"Enter Course Type Id"},
    { id:"courseFile", label:"Course Material",type:"file",placeholder:"Choose Course Material"},
    { id:"level", label:"Level",type:"text",placeholder:"Enter Course Level"},
    { id:"duration", label:"Duration",type:"text",placeholder:"Enter Course Duration"},
]

const AddCourse = ({onNavigate,setCourses}) => {
    const{getter,setter} = useAddCourseState();

    const handleSubmit = () => {
        setCourses((prevState) => {
            const newCourses = {...prevState};
            const payload = {
                ...getter,
                courseId: Math.random().toString()
            }
            newCourses?.data?.push(payload);
            return newCourses;
        })

        onNavigate("/");
    }

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
                            key={item.id}
                        />
                    ))
                }

                <ButtonGroup>
                    <Button variant="success" onClick={handleSubmit} disabled={getter.isDisable} >
                        Submit
                    </Button>

                    <Button variant="secondary" onClick={() => onNavigate("/")}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse