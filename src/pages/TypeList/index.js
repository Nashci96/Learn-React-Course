import React from "react";

import typeList from "../../fixtures/courseType.json"
import withPaginationList from "../../hoc/withPaginationList";

import { StyledListGroup } from "./style";
import TypeItem from "./components/TypeItem"

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem data={item} key={item.courseTypeId} />
            ))}
        </StyledListGroup>
    )
}

export default withPaginationList(List,{
    listData: typeList,
    label: "Course Type",
    navAdd: "/add-course-type"
});