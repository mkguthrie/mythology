import styled from 'styled-components'

export const Wrapper = styled.div`

    display: block;
    position: relative;
    z-index: 9;

    @media only screen and (min-width: 1200px) {
        display: none;
    }
    
    .icon-wrap {
        background: green;
        display: flex;
        justify-content: space-between;
        padding: 1em;
        position: relative;
        z-index: 9;

        .mobile-logo {
            width: 150px;
        }
    }

   
`
