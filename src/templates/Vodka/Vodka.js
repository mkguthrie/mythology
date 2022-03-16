import React from "react";
import Layout from "../../components/Layout/Layout";
import { isEmpty } from 'lodash';
import HeroSection from "../../components/ParentSpiritPage/HeroSection/HeroSection";
import { Wrapper, Intro} from "./Vodka.styles";

const VodkaPage = ( props ) => {

	const {
		    pageContext: {
			    page
		    }
	    } = props;
	
	// const backgroundImg = page.ACF_VodkaPageFields.hero.background.localFile.publicURL;
	// const pageH1 = page.ACF_VodkaPageFields.hero.heading;
	// const introText = page.ACF_VodkaPageFields.hero.introText;

          console.log(page);
	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<Wrapper>
						<HeroSection page={page} />
						{/* <Hero image={backgroundImg}>
							<h1><span>Premium Craft</span> {pageH1}</h1>
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
export default VodkaPage;

