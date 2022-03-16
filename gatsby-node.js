

const createHomePage = require( './create-pages/home' );
const createWhiskeyPage = require( './create-pages/whiskey' );
const createGinPage = require( './create-pages/gin' );
const createVodkaPage = require( './create-pages/vodka' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createHomePage( { actions, graphql } );
	await createWhiskeyPage( { actions, graphql } );
	await createGinPage( { actions, graphql } );
	await createVodkaPage( { actions, graphql } );
};