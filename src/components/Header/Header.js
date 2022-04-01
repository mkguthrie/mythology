import React, { useState } from "react";
import { useMenuQuery } from "../../hooks/useMenuQuery";

// components
import Mobile from "./Mobile/Mobile";
import Desktop from "./Desktop/Desktop";

// styles
import { Wrapper } from "./Header.styles";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuData = useMenuQuery()

    const handleOverlayMenu = () => setMenuOpen(prev => !prev)
    
    return (
        <Wrapper>
            <Mobile data={menuData} menuOpen={menuOpen} callback={handleOverlayMenu} />
            <Desktop data={menuData} />
        </Wrapper>
    )
}

export default Header;