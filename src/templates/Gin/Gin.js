import React from "react";
import Layout from "../../components/Layout/Layout";
import { isEmpty } from 'lodash';
import HeroSection from "../../components/ParentSpiritPage/HeroSection/HeroSection";
import { Wrapper } from "./Gin.styles";

const GinPage = ( props ) => {

	const {
		      pageContext: {
			      page
		      }
	      } = props;

	// const backgroundImg = page.ACF_GinFields.heroSection.background.localFile.publicURL;
	// const pageH1 = page.ACF_GinFields.heroSection.heading;
	// const introText = page.ACF_GinFields.heroSection.intro;

          console.log(page);
	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<Wrapper>
						<HeroSection page={page} />
                        {/* <Hero image={backgroundImg}>
							<h1>{pageH1}</h1>
						</Hero>
						<Intro><div className="introOuter"><div className="introInner">{introText}</div></div></Intro> */}
					</Wrapper>
				) : (
					// <Error message="Something Went Wrong"/>
                    <p>Error</p>
				)
			}
		</Layout>
	)
};
export default GinPage;

