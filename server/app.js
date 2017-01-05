
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require('pg');
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );
var port = process.env.PORT || 8080;

//string to cennect to my database
var connectionString = 'postgres://localhost:5432/inventory';

//static folder
app.use( express.static( 'public' ) );

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base

// add new item to the inventory
app.post( '/addItem', urlEncodedParser, function( req, res ){
  console.log( 'addItem route hit:', req.body );
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log(err);
    } else {
      console.log('connected to database in post');
      client.query('INSERT INTO items (object_name, color, size) values ($1, $2, $3)', [req.body.name, req.body.color, req.body.size]);
      done();
      res.send('go!');
    }// end else
  });//end pg.connect
}); // end app.post

// get all items from the inventory
app.get( '/getInventory', function( req, res ){
  console.log( 'getInventory route hit' );
  pg.connect(connectionString, function(err, client, done){
    if(err){
      console.log(err);
    } else{
      console.log('connected to db in getInventory');
      var query = client.query('SELECT * from items');
      var allItems = [];
      query.on('row', function(row){
        allItems.push(row);
      });// end query.on
      query.on('end', function(){
        done();
        console.log(allItems);
        res.send(allItems);
      });// end query.on
    }// end else
  });// end pg.connect
});// end app.get
