import React from "react";

// components
import Mobile from "./Mobile/Mobile";
import { useMenuQuery } from "../../hooks/useMenuQuery";

// styles
import { Wrapper } from "./Header.styles";

const Header = () => {
    
    const menuData = useMenuQuery()

    return (
        <Wrapper>
           
            <Mobile data={menuData} />
           
        </Wrapper>
    )
}

export default Header;