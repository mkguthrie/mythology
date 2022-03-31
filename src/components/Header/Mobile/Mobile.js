import React from "react";
import { Link } from "gatsby";
import Logo from "../../../images/MythologyLogo.png"

// components
import Nav from "./Nav/Nav";

// styles
import { Wrapper } from "./Mobile.styles";


const Mobile = ({ data, menuOpen, callback }) => {
    console.log(menuOpen);
    // const [menuOpen, setMenuOpen] = useState(false)

    // const handleOverlayMenu = () => setMenuOpen(prev => !prev)

    

    return (
        <Wrapper >
            <div className="icon-wrap">
                <Link to="/">
                    <img src={Logo} alt={data.site.siteMetadata.title} className="mobile-logo" />
                </Link>
                <button 
                className="closeButton"
                onClick={callback}
                >X</button>
            </div>
            <Nav menu={data.menu.menuItems.nodes} menuOpen={menuOpen} />
        </Wrapper>
    )
}

export default Mobile;