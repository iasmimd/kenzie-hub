import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
        text-decoration: none;
        color: inherit;
    }

    body{
        background:#121214;
        color: #F8F9FA;
        font-family: "Inter", sans-serif;
    }

    button{
        cursor: pointer;
    }

    .customModal{
        background-color: #212529;
    }
`