import React from "react";
import Layout from "../../components/Layout/Layout";
import { isEmpty } from 'lodash';
import HeroSection from "../../components/ParentSpiritPage/HeroSection/HeroSection";
import { Wrapper, ProcessWrap } from "./Whiskey.styles";

const WhiskeyPage = ( props ) => {

	const {
		    pageContext: {
			    page
		    }
	    } = props;
	
	// const backgroundImg = page.ACF_Whiskey_Page_Fields.whiskeyPageHero.pageBackground.localFile.publicURL;
	// const pageH1 = page.ACF_Whiskey_Page_Fields.whiskeyPageHero.pageHeading;
	// const introText = page.ACF_Whiskey_Page_Fields.whiskeyPageHero.pageIntroText;

          console.log(page);
	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<Wrapper>
						<HeroSection page={page} />
						{/* <Intro><div className="introOuter"><div className="introInner">{introText}</div></div></Intro>
                        <ProcessWrap>
							<div className="innerWrap">
								<h2>Our Blending Process</h2>
								<p>We start each blend by formulating an idea of the desired finished product and then we begin to screen through whiskies from different distilleries, searching for whiskies that will help us create the final product.</p>
							</div>
							
						</ProcessWrap> */}
					</Wrapper>
				) : (
					// <Error message="Something Went Wrong"/>
                    <p>Error</p>
				)
			}
		</Layout>
	)
};
export default WhiskeyPage;

