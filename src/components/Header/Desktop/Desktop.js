import React from "react";

// styles
import { Wrapper } from "./Desktop.styles";
import Nav from "./Nav/Nav";

const Desktop = ({ data }) => {
    // console.log(data);

    return (
        <Wrapper>
            <Nav data={data} />
        </Wrapper>
    )
}

export default Desktop;