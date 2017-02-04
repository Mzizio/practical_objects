/*Created By:Name:Mxolisi D Mtshali
            Date:03-02-2017;
*/
//import assert function to test your functions;
const assert = require('assert');

//Use these two shopping lists to test.

assert.equal(shoppingList([
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
]),37.5);

assert.equal(shoppingList([
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
]),58);


//returns the shopping list totalprice;
function shoppingList(List){
  var total=0;
  for(var i=0;i < List.length;i++){
    total+=List[i].price;
  }
  return total;
} 