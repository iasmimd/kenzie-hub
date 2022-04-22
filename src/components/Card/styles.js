import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100%;
    max-width: 800px;
    padding: 15px 0px;
    background: #212529;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #121214;
    cursor: pointer;
    border-radius: 5px;
    width: 95%;
    max-width: 800px;  
    margin-bottom: 10px;
    padding: 15px;
        
    h3{
        font-weight: 700;
    }
`