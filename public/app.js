angular.module( "Books", [] )
.controller( "mainCtrl", function( $scope, $http ) {
	$scope.books = [];
	$scope.favorites = [];

	$scope.favoriteBook = book => {
		$http.post( "/api/favorites", book ).then( favorites => {
			$scope.favorites = favorites.data;
		} );
	};

	$scope.clearFavorites = () => {
		$http.delete( "/api/favorites" ).then( () => {
			$scope.favorites = [];
		} );
	};

	$http.get( "/api/books" ).then( books => {
		$scope.books = books.data;
	} );

	$http.get( "/api/favorites" ).then( favorites => {
		$scope.favorites = favorites.data;
	} );
} );
