import { Link } from "gatsby"
import React from "react"
import { Wrapper } from "./Nav.styles"
import Logo from "../../../../images/MythologyLogo.png"



const Nav = ({ data }) => {

    const list = data.menu.menuItems.nodes;
    const half = Math.ceil(list.length / 2)
    const firstHalf = list.slice(0, half)
    const secondHalf = list.slice(-half)
    console.log(firstHalf);
    
    
    return (
        <Wrapper>
            
            <ul>
            {firstHalf.map(mainItem =>
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
            
            <li>
            <Link to="/">
                    <img src={Logo} alt={data.site.siteMetadata.title} className="desktop-logo" />
            </Link>
            </li>
            
            
            {secondHalf.map(mainItem =>
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