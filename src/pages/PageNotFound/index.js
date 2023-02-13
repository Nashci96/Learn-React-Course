import { useLocation } from "react-router-dom";
import StyledContainer from "../../components/StyledContainer";

const PageNotFound = () => {
    const location = useLocation()
    return (
        <StyledContainer>
            <h3>No Match For <code>{location.pathname}</code> </h3>
        </StyledContainer>
    )
}

export default PageNotFound