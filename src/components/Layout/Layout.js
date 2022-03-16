import React from "react";


// components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// styles
import { Primary, GlobalStyles } from './Layout.styles';

const Layout = ({children}) => {


    return (
        <>
        <GlobalStyles />
        <Header />
        <Primary>{children}</Primary>
        <Footer />
        </>
    )
}

export default Layout;