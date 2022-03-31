import { Link } from "gatsby"
import React from "react"
import { Wrapper } from "./Nav.styles"
import Logo from "../../../../images/MythologyLogo.png"



const Nav = ({ data }) => {

    // console.log(data)
    return (
        <Wrapper>
            <Link to="/">
                    <img src={Logo} alt={data.site.siteMetadata.title} className="mobile-logo" />
            </Link>
            <ul>
            {data.menu.menuItems.nodes.map(mainItem =>
                !mainItem.parentId ? (
                <li key={mainItem.id} className="nav-item">
                    <Link to={mainItem.url} activeClassName="nav-active">
                    {mainItem.label}
                    {mainItem.childItems.nodes.length !== 0 && <div className="toggle-dropdown">&#8964;</div>}
                    </Link>
                    {mainItem.childItems.nodes.length !== 0 ? (
                    <ul className="dropdown-menu">
                        {mainItem.childItems.nodes.map(childItem => (
                        <li key={childItem.id} className="dropdown-item">
                            <Link to={childItem.url} activeClassName="nav-active">
                            {childItem.label}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    ) : null}
                </li>
                ) : null
            )}
            </ul>
        </Wrapper>
    )
}

export default Nav