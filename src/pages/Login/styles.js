import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
    width: 101px;
    height: 14px;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212529;
    margin-top: 15px;
    border-radius: 5px;
    height: 450px;
    width: 90%;
    max-width: 420px;    

    form{
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        padding: 5px;
        height: 80%;
        width: 90%;
        max-width: 425px;
    }

    h1{
        text-align: center;
        font-weight: 700;
        font-size: 15px;
    }

    span{
        text-align: center;
        color: #868E96;
        font-size: 11px;
    }

    button{
        margin-bottom: 10px;
    }
`
