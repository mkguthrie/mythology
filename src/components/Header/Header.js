import React from "react";
import Navigation from "../Navigation/Navigation";
import { useMenuQuery } from "../../hooks/useMenuQuery";

// styles
import { Wrapper } from "./Header.styles";

const Header = () => {
    const { menu } = useMenuQuery()

    return (
        <Wrapper>
            <Navigation menu={menu.menuItems.nodes} />
        </Wrapper>
    )
}

export default Header;