import styled from "styled-components";

export const Container = styled.button`
    background: ${(props) => (props.graySchema ? "#868E96" : "#FF577F")};
    color:  #FFFFFF;
    height: 45px;
    border-radius: 8px;
    border: 2px solid transparent;
    font-weight: 400;
    margin-top: 15px;
    width: 100%;
    transition: 0.5s;
    :hover{
        border: 2px solid #ffffff;
    }
`;