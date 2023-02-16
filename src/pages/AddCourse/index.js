import React from "react";
import { 
    ButtonGroup , Form , Button 
} from "react-bootstrap";

import {StyledContainer,FormInput,FormFile,FormSelect} from "../../components"; 
import constants from "../../constants";
import { useNavigate } from "react-router-dom";

import { StyledTitle } from "./style";
import useAddCourseState from "./useAddCourseState";
import { addCourse } from "../../services/courseApi";
import useFetchMutation from "../../hooks/useFetchMutation";
import useFetchQuery from "../../hooks/useFetchQuery";
import { getCoursesTypes } from "../../services/typeApi";

const FORM_LIST = [
    { id:"title", label:"Title",type:"text",placeholder:"Enter Course Title"},
    { id:"description", label:"Description",type:"textarea",placeholder:"Enter Course Description"},
    { id:"level", label:"Level",type:"text",placeholder:"Enter Course Level"},
    { id:"duration", label:"Duration",type:"text",placeholder:"Enter Course Duration"},
]

const AddCourse = () => {
    const{getter,setter} = useAddCourseState();
    const navigate = useNavigate()

    const {fetchMutation} = useFetchMutation(
        addCourse,
        () => navigate(constants.ROUTES.COURSE)
    );
    const {data: typeData} = useFetchQuery(getCoursesTypes)

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData()

        formData.append("title",getter.title)
        formData.append("description",getter.description)
        formData.append("courseTypeId",getter.courseTypeId)
        formData.append("file",getter.courseFile)
        formData.append("duration",getter.duration)
        formData.append("level",getter.level)

        fetchMutation(formData)
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
                <FormFile 
                    label="Course Material"
                    value={getter?.courseFile}
                    placeholder="Choose course material"
                    onChange={setter?.courseFile}
                />
                <FormSelect 
                    label="Course Type Id"
                    placeholder="Enter Course Type By Id"
                    onChange={setter?.courseTypeId}
                    value={getter?.courseTypeId}
                    values={typeData?.data?.map((item) => ({
                        value: item?.courseTypeId,
                        label: item?.typeName
                    }))}
                />

                <ButtonGroup>
                    <Button variant="success" onClick={submitHandler} disabled={getter.isDisable}>
                        Submit
                    </Button>

                    <Button variant="secondary" onClick={() => navigate(constants.ROUTES.COURSE)}>
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>
        </StyledContainer>
    )
}

export default AddCourse