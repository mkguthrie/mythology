import React from "react"
import { Hero } from "./HeroSection.styles"

const HeroSection = ({ page }) => {

    const backgroundImg = page.ACF_parentSpiritPageFields.heroSection.background.localFile.publicURL;
    const pageHeading = page.ACF_parentSpiritPageFields.heroSection.heading

    return (
        <Hero image={backgroundImg}>
            <h1>{pageHeading}</h1>
        </Hero>
    )
}

export default HeroSection