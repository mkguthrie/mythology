import React from "react";
import { useMenuQuery } from "../../hooks/useMenuQuery";

// components
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

// styles
import { Wrapper } from "./Header.styles";

const Header = () => {
    
    const menuData = useMenuQuery()

    return (
        <Wrapper>
           
            <Mobile data={menuData} />
            <Desktop data={menuData} />
           
        </Wrapper>
    )
}

export default Header;