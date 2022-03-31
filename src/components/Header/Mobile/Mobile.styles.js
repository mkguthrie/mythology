import styled from 'styled-components'

export const Wrapper = styled.div`

    display: block;

    @media only screen and (min-width: 1200px) {
        display: none;
    }
    
    .icon-wrap {
        background: green;
        display: flex;
        justify-content: space-between;
        padding: 1em;

        .mobile-logo {
            width: 150px;
        }
    }

   
`
