import styled from 'styled-components';

export const Wrapper = styled.nav`

    ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        list-style: none;
        padding: 0;
    }

    ul.dropdown-menu {
        display: none;
    }

    li {
        position: relative;
        border-bottom: 1px solid #a7873a;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        line-height: 0;

        &:last-child {
            border-bottom: 0;
        }
        

        .toggle-dropdown {
            position: absolute;
            right: 10px;
        }
    }
`