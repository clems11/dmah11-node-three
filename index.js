const express = require( "express" );
const { json } = require( "body-parser" );
const session = require( "express-session" );
const cors = require( "cors" );
const sessionConfig = require( "./config/sessionConfig" );
const port = 4000;
const app = express();

app.use( json() );
app.use( session( sessionConfig ) );
app.use( express.static( `${ __dirname }/public` ) );
app.use( cors( {
	origin: "www.devmountain.com"
} ) );

const bookRoutes = require( "./features/books/bookRoutes" );
bookRoutes( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
