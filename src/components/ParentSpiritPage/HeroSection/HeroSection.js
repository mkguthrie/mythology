import React from "react"
import { Hero, Intro } from "./HeroSection.styles"
import { StaticImage } from "gatsby-plugin-image"

const HeroSection = ({ page }) => {

    const backgroundImg = page.ACF_parentSpiritPageFields.heroSection.background.localFile.publicURL;
    const pageHeading = page.ACF_parentSpiritPageFields.heroSection.heading
    const intro = page.ACF_parentSpiritPageFields.heroSection.introText

    return (
        <>
        <Hero image={backgroundImg}>
            <h1>{pageHeading}</h1>
        </Hero>
        <Intro>
            <div className="introOuter">
                <div className="introInner">
                    <p>{intro}</p>
                    <StaticImage
                    src="../../../images/down-triangle-gold.png"
                    width={120}
                    quality={90}
                    formats={["auto", "webp", "avif"]}
                    alt="downward facing triangle"
                    style={{ marginBottom: `.5rem` }}
                    
                    />
                </div>
                
            </div>
        </Intro>
        </>
        
    )
}

export default HeroSection