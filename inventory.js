console.log( 'inventory.js sourced' );
// global vars
var inventory;
var selectedColor ='none';
var selectedSize ='none';

var addItem = function( color, name, size ){
  console.log( 'adding item: ' + name + ' ' + color + ' ' + size );
  // create object
  // push into array
  // show updated inventory
} // end addItem

var searchInventory = function(){
  console.log( 'in searchInventory' );
  // get size from user
  selectedSize = document.getElementById( 'sizeIn' ).value;
  // get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  console.log( 'looking for something ' + selectedColor + ' and ' + selectedSize );
  // check if an item fits this description
} // end searchInventory

///////// ADD ITEMS /////////
addItem( 'blue', 'Smurf', 'Small');
addItem( 'mermaid treasure', 'Prime Academy', 'Large');
addItem( 'bus seat green', 'Baby Banner', 'Medium');
addItem( 'purple', 'Eggplant', 'Small');
addItem( 'purple', 'Prince', 'Medium');
