import React from "react";
import { Button } from "react-bootstrap";
import { StyledContainer , EmptyState , Pagination } from "../components";
import { useNavigate } from "react-router-dom";
import useFetchQuery from "../hooks/useFetchQuery";

export default (ListComponent , opts) => {
    return (props) => {
        const navigate = useNavigate();
        const {label , routeToAdd, query} = opts;
        const [currentPage, setCurrentPage] = React.useState(1)
        const {data,loading, refetch} = useFetchQuery(query,currentPage)

        if(loading) {
            return(
                <StyledContainer>
                    <p className= "lead"> loading </p>
                </StyledContainer>
            )
        }

        return (
            <>
             <StyledContainer>
                <Button 
                    variant="success" onClick={() => navigate(routeToAdd)}
                >
                    Add Learning {label}
                </Button>

                {
                    data?.data?.length > 0 
                    ? ( <ListComponent data={data?.data} refetch={refetch} {...props} /> )
                    : <EmptyState text={`Data ${label} Kosong...`} /> 
                }
             </StyledContainer>
             <Pagination 
                totalPage={data?.totalPage}
                onChangeCurrentPage = {setCurrentPage}
                currentPage={currentPage}
             />
            </>
        )
    }
}