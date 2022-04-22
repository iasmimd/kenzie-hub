import styled, { css } from "styled-components";

export const Container = styled.div`
    text-align: left;
    label{
        font-size: 12px;
        span{
            color: #FF7F50;
        }
    }

`

export const InputContainer = styled.div`
    background: #343B41;
    border-radius: 10px;
    border: 1px solid #ffffff;
    color:#ffffff;
    margin-top: 5px;
    padding: 1rem;
    width: 100%;
    height: 50px;
    display: flex;
    transition: 0.4s;

    ${props => props.isErrored && css`
     border-color: #FF7F50;
     svg{
         color: #FF7F50;
     }
    `}

    input{
     background: transparent;
     align-items: center;
     flex: 1;
     border: 0;
     color: #F8F9FA;
     &::placeholder{
            color: #F8F9FA;
        }
    }

     svg{
        margin-right: 16px;
    }
`