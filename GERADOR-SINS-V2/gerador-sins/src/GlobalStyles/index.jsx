import { createGlobalStyle } from 'styled-components'
export const EstiloGlobal = createGlobalStyle`
    :root{
        --azul-escuro: #0f4979;
        --cor-texto: #ccf1fc;
    }
    *{
        margin: 0;
        font-family: 'Calibri';
    }
    h1, h2, h3, h4, h5, p{
        width: 100%;
        text-align: center;
    }
    button, .botao{
        border: none;
        background-color: var(--azul-escuro);
        color: var(--cor-texto);
        padding: 6px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover, .botao:hover{
        transition: 0.5s;
        opacity: 0.8;
    }
    main{
        min-height: calc(100vh - 140px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        padding: 5px;
        box-sizing: border-box;
        background-color: var(--cor-texto);
        color: var(--azul-escuro);
    }
    .hide{
        opacity: 0.2;
    }
    .oculto{
        display: none;
    }

    @media print{
        
        @page{
            size: landscape;
            margin: 0.2in;
            
        }

        body{
            margin: 0;
            padding: 0;
        }
        .img_impressao{
            width: 150px;
        }
        .no-print{
            display: none;
        }
        .print{
            display: block;
        }
        .page-breack{
            page-break-after: always;
        }
        .oculto{
            display: block;
        }
        *{
            box-sizing: border-box;
        }
    }
`