const { slash } = require( `gatsby-core-utils` );
const homePageTemplate = require.resolve(`../src/templates/Home/Home.js`);

// Get all the front page data.
const GET_HOME_PAGE = `
query GET_HOME_PAGE {
	wpPage(databaseId: {eq: 52}) {
    slug
    title
    ACF_homePageFields {
      hero {
        background {
          localFile {
            publicURL
          }
        }
        darkLogo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        lightLogo {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
            }
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
		return await graphql( GET_HOME_PAGE )
			.then( ( { data } ) => {

				const { wpPage } = data;

				return { page: wpPage };
			} );
	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	await fetchPosts().then( ( { page } ) => {

		createPage( {
			path: `/`,
			component: slash( homePageTemplate ),
			context: {
                page
				// page,
				// posts,
				// postSearchData: {
				// 	allPosts: allPosts,
				// 	options: {
				// 		indexStrategy: `Prefix match`,
				// 		searchSanitizer: `Lower Case`,
				// 		TitleIndex: true,
				// 		AuthorIndex: true,
				// 		CategoryIndex: true,
				// 		SearchByTerm: true,
				// 	},
				// },
			},
		} );

	} )

};

