import React from "react";
import Layout from "../../components/Layout/Layout";
import { isEmpty } from 'lodash';
import { Wrapper, Hero, MobileHero, LogoLight, LogoDark } from "./Home.styles";
import { getImage } from "gatsby-plugin-image"

const HomePage = ( props ) => {

	const {
		    pageContext: {
			    page
		    }
	    } = props;
	
	const backgroundImg = page.ACF_homePageFields.hero.background.localFile.publicURL;
	const logoDark = getImage(page.ACF_homePageFields.hero.darkLogo.localFile);
	const logoLight = getImage(page.ACF_homePageFields.hero.lightLogo.localFile);

          console.log(page);
	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<Wrapper>
                        <Hero image={backgroundImg}>
							<LogoDark image={logoDark} alt="Mythology Distillery Dark Logo" />
						</Hero>
						<MobileHero>
							<LogoLight image={logoLight} alt="Mythology Distillery Light Logo" />
						</MobileHero>
					</Wrapper>
				) : (
					// <Error message="Something Went Wrong"/>
                    <p>Error</p>
				)
			}
		</Layout>
	)
};
export default HomePage;

