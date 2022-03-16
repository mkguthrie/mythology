const { slash } = require( `gatsby-core-utils` );
const whiskeyPageTemplate = require.resolve(`../src/templates/Whiskey/Whiskey.js`);

// Get all the front page data.
const GET_WHISKEY_PAGE = `
query GET_WHISKEY_PAGE {
	
	wpPage(databaseId: {eq: 13}) {
		slug
		title
		ACF_parentSpiritPageFields {
		  heroSection {
			heading
			background {
			  localFile {
				publicURL
			  }
			}
			introText
		  }
		}
	  }
	
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_WHISKEY_PAGE )
			.then( ( { data } ) => {

				const { wpPage } = data;

				return { page: wpPage };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {

		createPage( {
			path: `/${page.slug}`,
			component: slash( whiskeyPageTemplate ),
			context: {
                page
			},
		} );

	} )

};

