const bookCtrl = require( "./bookCtrl" );

module.exports = app => {
	app.get( "/api/books", bookCtrl.getBooks );
	app.post( "/api/books", bookCtrl.postBooks );

	app.get( "/api/favorites", bookCtrl.getFavorites );
	app.post( "/api/favorites", bookCtrl.favoriteBook );
	app.delete( "/api/favorites", bookCtrl.clearFavorites );
};
