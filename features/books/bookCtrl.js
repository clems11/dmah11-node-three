const books = [
	{
		  title: "Moby Dick"
		, author: "Anonymous"
		, _id: 0
	}
	, {
		  title: "Harry Potter"
		, author: "JK Rowling"
		, _id: 1
	}
	, {
		  title: "Alice in Wonderland"
		, author: "Anonymous"
		, _id: 2
	}
];

module.exports = {
	getBooks( req, res ) {
		return res.status( 200 ).json( books );
	}

	, postBooks( req, res ) {
		books.push( req.body );
		return res.status( 201 ).json( books );
	}

	, favoriteBook( req, res ) {
		if ( req.session.favorites ) {
			req.session.favorites.push( req.body );
		} else {
			req.session.favorites = [ req.body ];
		}

		return res.status( 200 ).json( req.session.favorites );
	}

	, getFavorites( req, res ) {
		return res.status( 200 ).json( req.session.favorites );
	}

	, clearFavorites( req, res ) {
		req.session.destroy();
		return res.status( 200 ).end();
	}
};
