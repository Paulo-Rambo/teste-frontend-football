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
        --color-country: #edfaff;
        --color-border-card-1: #f7f7f7;
        --color-1:#e4e4e4;
        --imput-width: max(16vw,150px);
        --imput-height: max(4vw,40px);
        --imput-width2: max(1vw,250px);
        --border-radius: max(1vw,12px);
        --border-radius2: max(1.5vw,16px);
        --player-card-width: max(25vw, 260px);
        --player-card-height: max(20vw, 220px);
        --player-card-font-size: max(1.6vw, 16px);
        --league-card-font-size: 1.8vw;
        --country-card-font-size: 1.8vw;
        --team-card-height: 16vw;
        --team-card-width: 25vw;
        --card-radius-1:max(2vw, 16px);

    }
    @media (min-width: 420px){
        :root{
            
        }
    }
    body{
        background-color: var(--color-background);
    }
`;
