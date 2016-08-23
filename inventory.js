console.log( 'inventory.js sourced' );
// global vars
var selectedColor ='none';
var selectedSize ='none';

var getSizeSelection = function(){
  console.log( 'in getSizeSelection' );
  console.log( 'selected size:', document.getElementById('sizeIn').value );
} // end getSizeSelection

var searchInventory = function(){
  console.log( 'in searchInventory' );
  // get size from user
  selectedSize = document.getElementById( 'sizeIn' ).value;
  // get color from user
  selectedColor = document.getElementById( 'colorIn' ).value;
  console.log( 'looking for something ' + selectedColor + ' and ' + selectedSize );
  // check if an item fits this description
} // end searchInventory
