import React from "react";
import { Button} from "react-bootstrap";

import { StyledListGroup,StyledText } from "./style";
import CourseItem from "./components/CourseItem";

import { StyledContainer, Pagination  } from "../../components";

const Empty = () => (
    <StyledText>Data Kosong ...</StyledText>
)

const List = ({data}) => {
    const [currentPage,setCurrentPage] = React.useState(1);
    const [recordsPerPage] = React.useState(3)

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord= indexOfLastRecord - recordsPerPage
    const currentRecords = data?.slice(indexOfFirstRecord,indexOfLastRecord)
    const totalPage = Math.ceil(data?.length/recordsPerPage)

    return(
        <>
            <StyledListGroup>
            {currentRecords?.map((item) => (
                <CourseItem data={item} key={item?.courseId} />
            ))}
            </StyledListGroup>
            <Pagination 
                totalPage={totalPage}
                currentPage={currentPage}
                onChangeCurrentPage={setCurrentPage}
            />
        </>
    )
}

const CourseList = ({ onNavigate, courses}) => {
    return (
        <StyledContainer>
            <Button variant= "success" onClick={() => onNavigate("/add-course")}>Add Course</Button>
            {courses?.data?.length > 0 ? <List data ={courses?.data} /> : <Empty />}
        </StyledContainer>
    )
}

export default CourseList;