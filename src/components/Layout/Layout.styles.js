import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Primary = styled.main`
    // padding: 10px;
    // border: 10px solid #000;
    // margin: 10px 0;
    
`;

export const GlobalStyles = createGlobalStyle`
    {
        h1,h2,h3,h4,h5 {
            font-family: 'Libre Baskerville', serif;
        }
    }

    body {
        margin: 0;
    }
`;