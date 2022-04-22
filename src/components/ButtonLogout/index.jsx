import {Container} from "./styles";

const ButtonLogout = ({children, ...rest}) => {
    return(
        <Container {...rest}>{children}</Container>
    )
}

export default ButtonLogout