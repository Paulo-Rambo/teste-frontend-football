import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root{
        --color-background: #f7faf9;
        --color-year: #caf1ff;
        --imput-width: 150px;
        --imput-height: 35px;
        --border-radius: 12px

    }
    @media (min-width: 420px){
        :root{
            
        }
    }
    body{
        background-color: var(--color-background);
    }
`;
