import styled from 'styled-components';

export const Wrapper = styled.nav`

    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;

        li {

            .toggle-dropdown {
                display: inline-block;
                margin-left: 10px;
            }

            .dropdown-menu {
                display: none;
            }
        }

        li {
            .desktop-logo {
                width: 150px;
            }
        }
    }
`