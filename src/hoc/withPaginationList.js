import React from "react";
import { Button } from "react-bootstrap";
import { StyledContainer , EmptyState , Pagination } from "../components";

export default (ListComponent , opts) => {
    return (props) => {
        const {listData,label} = opts
        const [data,setData] = React.useState(listData)
        const [currentPage,setCurrentPage] = React.useState(1)
        const [recordsPerPage] = React.useState(3)

        const indexOfLastRecord = currentPage * recordsPerPage
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
        const currentRecord = data?.data?.slice(indexOfFirstRecord,indexOfLastRecord)
        const totalPage = Math.ceil(data?.data?.length / recordsPerPage)

        return (
            <>
             <StyledContainer>
                <Button 
                    variant="success" onClick={() => props.onNavigate(opts.navAdd)}
                >
                    Add {label}
                </Button>

                {
                    currentRecord?.length > 0 
                    ? ( <ListComponent data={currentRecord}/> )
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