console.log( 'inventory.js sourced' );
// global vars
var inventory=[];
var selectedColor ='none';
var selectedSize ='none';

var addItem = function( color, name, size ){
  console.log( 'adding item: ' + name + ' ' + color + ' ' + size );
  // create object
  var newItem = {
    color: color,
    name: name,
    size: size
  }; // end newItem
  // push into array
  inventory.push( newItem );
  // show updated inventory
  console.log( inventory );
} // end addItem

var searchInventory = function(){
  console.log( 'in searchInventory' );
  // get size from user
  selectedSize = document.getElementById( 'sizeIn' ).value;
  // get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  console.log( 'looking for something ' + selectedColor + ' and ' + selectedSize );
  // check if an item fits this description
  // loop through the inventory array and see if any item matches
  // array for our results
  var results = [];
  for( var i = 0; i < inventory.length; i++ ){
    // does this item match my description?
    if( inventory[ i ].color == selectedColor && inventory[ i ].size == selectedSize ){
      results.push( inventory[ i ] );
    }
  }; // end for
  console.log( results.length + ' matches found' );
  console.log( results );
} // end searchInventory

///////// ADD ITEMS /////////
addItem( 'blue', 'Smurf', 'Small');
addItem( 'blue', 'blueberry', 'Small');
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem( 'bus seat green', 'Baby Banner', 'Medium');
addItem( 'purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');
