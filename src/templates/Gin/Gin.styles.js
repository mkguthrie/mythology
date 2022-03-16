import styled from "styled-components"
// import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
    background-color: rgb(233,237,218);
    position: relative;
`


export const Intro = styled.div`
  background-color: rgb(233, 237, 218);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

    @media screen and (min-width: 768px) {
        min-height: 150px;
        align-items: flex-start;
    }

  .introOuter {
    background-color: rgb(233, 237, 218);
    
    padding: 10px;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 600px;
        margin-top: -50px;
    }

    .introInner {
        border: 2px solid #a7873a;
        padding: 1em;
        line-height: 1.5;

        @media screen and (min-width: 768px) {
            padding: 2em 2em 0;
            border-bottom: 0;
        }
    }
  }
`