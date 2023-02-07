import React from "react";
import {Pagination as BootstrapPagination} from "react-bootstrap";
import { StyledPagination } from "./style";

const Pagination = ({ totalPage , currentPage,onChangeCurrentPage}) => {
    const paginationItems = Array(totalPage).fill(0);

    const nextPageHandler = () => {
        if(currentPage !== totalPage) onChangeCurrentPage(currentPage+1)
    }

    const prevPageHandler = () => {
        if(currentPage !== 1) onChangeCurrentPage(currentPage-1)
    }

    const onChangePageHandler = (isActive,toPage) => () => {
        if(!isActive) onChangeCurrentPage(toPage)
    }

    return(
        <StyledPagination>
            <BootstrapPagination.Item
                disabled={currentPage === 1}
                onClick={prevPageHandler}
            >
                Previous
            </BootstrapPagination.Item>

            { paginationItems.map((item,index) => {
                const isActive = currentPage === index + 1;
                return (
                    <BootstrapPagination.Item
                        key={index}
                        active={isActive}
                        onClick={onChangePageHandler(isActive,index + 1)}
                    >
                        {index + 1}
                    </BootstrapPagination.Item>
                )
            })}

            <BootstrapPagination.Item
                disabled={currentPage === totalPage}
                onClick={nextPageHandler}
            >
                Next
            </BootstrapPagination.Item>
        </StyledPagination>       
    )
}

export default Pagination;