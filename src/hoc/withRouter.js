import { Component } from "react";
import { useNavigate,useParams } from "react-router-dom";

export const withRouter = (Component) => {
    return(props) => {
        const navigate = useNavigate();
        const params = useParams();

        return(
            <Component 
                {...props}
                route={{navigate,params}}
            />
        )
    }
}