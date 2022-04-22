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

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    height: 7%;
    padding:0px 15px;
`

export const Content = styled.div`
     display: flex;
    flex-direction: column;
    height: 750px;
    width: 90%;
    max-width: 800px;    

    h1{
        font-size: 18px;
    }

    span{
        color: #868E96;
        font-weight: 400;
        font-size: 12px;
    }

    hr{
     border-color: #212529;
    }
`

export const ContentUser = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    padding: 15px;
    height: 15%;
    
    h1{
        margin-bottom: 10px;
    }
`

export const ContentAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:15px;

    button {
    border: 1px solid #212529;
    background-color: #212529;
    border-radius: 5px;
    transition: all ease-in-out 0.2s;
    }

    button span {
    display: flex;
    justify-content: center;
    align-items: baseline;
    color: #fff;
    }

    button:hover {
    background-color: #FF577F;
    }
`