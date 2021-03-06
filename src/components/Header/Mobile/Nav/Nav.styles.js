import styled from 'styled-components';

export const Wrapper = styled.nav`
    height: ${props => (props.menuOpen ? 'auto' : '0')};
    opacity: ${props => (props.menuOpen ? '1' : '0')};
    visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
    transform: ${props => props.menuOpen ? 'translateY(0%)' : 'translateY(-100%)'};
    transition: all .25s ease;
    overflow: hidden;
    position: absolute;
    width: 100%;
    background-color: #f1f6df;
       

    ul {
        display: flex;
        flex-direction: column;
        text-align: center;
        list-style: none;
        padding: 0;
        margin: 0;
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