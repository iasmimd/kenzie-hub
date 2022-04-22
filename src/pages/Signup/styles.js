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

export const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 90%;
    max-width: 425px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #212529;
    margin-top: 15px;
    border-radius: 5px;
    height: 750px;
    width: 90%;
    max-width: 420px;    

    form{
        display: flex;
        flex-direction: column;
        height: 90%;
        width: 90%;
        padding: 5px;
        max-width: 800px;
    }

    h1{
        text-align: center;
        font-weight: 700;
        font-size: 15px;
    }

    span{
        text-align: center;
        margin-top:5px;
        margin-bottom: 5px;
        color: #868E96;
        font-size: 11px;
    }

    div{
       margin-bottom: 6px
    }

    button{
        margin-top:10px;
    }

    label{
        font-size: 12px;
        margin-bottom: 2px;
    }
`
