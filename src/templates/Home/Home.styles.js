import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
    background-color: rgb(233,237,218);
    position: relative;
`

export const Hero = styled.div`
    background-image: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 300px;
    position: relative;

    @media screen and (min-width: 768px) {
        min-height: 600px;
    }
`

export const MobileHero = styled.div`
    background-color: #333a32;
    padding: 1em;
    margin-top: -80px;
    z-index: 999;
    position: relative;
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const LogoLight = styled(GatsbyImage)`
    display: block;
    margin: 0 auto;
    width: 260px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const LogoDark = styled(GatsbyImage)`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        position: absolute;
        left: 4%;
        top: 50%;
        transform: translateY(-30%);
        width: 27%;
    }
`