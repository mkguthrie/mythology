import React from "react";
import { Link } from "gatsby";
import Logo from "../../../images/MythologyLogo.png"

// components
import Nav from "./Nav/Nav";

// styles
import { Wrapper } from "./Mobile.styles";


const Mobile = ({ data }) => {
    // console.log(data);

    return (
        <Wrapper>
            <div>
                <Link to="/">
                    <img src={Logo} alt={data.site.siteMetadata.title} />
                </Link>
                <button>X</button>
            </div>
           
            <Nav menu={data.menu.menuItems.nodes} />
        </Wrapper>
    )
}

export default Mobile;