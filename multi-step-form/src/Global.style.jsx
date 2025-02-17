import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
    :root{
        --Marine-blue: hsl(213, 96%, 18%);
        --Purplish-blue: hsl(243, 100%, 62%);
        --Pastel-blue: hsl(228, 100%, 84%);
        --Light-blue: hsl(206, 94%, 87%);
        --Strawberry-red: hsl(354, 84%, 57%);

        --Cool-gray: hsl(231, 11%, 63%);
        --Light-gray: hsl(229, 24%, 87%);
        --Magnolia: hsl(217, 100%, 97%);
        --Alabaster: hsl(231, 100%, 99%);
        --White: hsl(0, 0%, 100%);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body{
        width:100vw;
        height: 100vh;
    }

    body,input, button{
        font-family: "Ubuntu", serif;
    }

    main{
        width: 100%;
        padding: 2rem;
        display:flex;
        justify-content:center;
    }

    section h1{
        color: var(--Marine-blue);
        font-size: 2rem;
    }
    section p{
        color: var(--Cool-gray);
    }
`;
