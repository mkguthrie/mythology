const { slash } = require( `gatsby-core-utils` );
const ginPageTemplate = require.resolve(`../src/templates/Gin/Gin.js`);

// Get all the front page data.
const GET_GIN_PAGE = `
query GET_GIN_PAGE {
	
	wpPage(databaseId: {eq: 15}) {
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
		  }
		}
	  }
	
}
`;

module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_GIN_PAGE )
			.then( ( { data } ) => {

				const { wpPage } = data;

				return { page: wpPage };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {

		createPage( {
			path: `/${page.slug}`,
			component: slash( ginPageTemplate ),
			context: {
                page
			},
		} );

	} )

};

