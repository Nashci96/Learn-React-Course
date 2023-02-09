import React from "react";
import { Button } from "react-bootstrap";
import { StyledContainer , EmptyState , Pagination } from "../components";

export default (ListComponent , opts) => {
    return (props) => {
        const {label,navAdd} = opts
        const {listData} = props;
        const [currentPage,setCurrentPage] = React.useState(1)
        const [recordsPerPage] = React.useState(3)

        const indexOfLastRecord = currentPage * recordsPerPage
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
        const currentRecord = listData?.slice(indexOfFirstRecord,indexOfLastRecord)
        const totalPage = Math.ceil(listData?.length / recordsPerPage)

        return (
            <>
             <StyledContainer>
                <Button 
                    variant="success" onClick={() => props.onNavigate(navAdd)}
                >
                    Add Learning {label}
                </Button>

                {
                    currentRecord?.length > 0 
                    ? ( <ListComponent data={currentRecord} {...props} /> )
                    : <EmptyState text={`Data ${label} Kosong...`} /> 
                }
             </StyledContainer>
             <Pagination 
                totalPage={totalPage}
                onChangeCurrentPage = {setCurrentPage}
                currentPage={currentPage}
             />
            </>
        )
    }
}