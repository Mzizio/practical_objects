/*Created By:Name:Mxolisi D Mtshali
            Date:02-02-2017;
*/
//import assert function to test your functions;
//const assert = require('assert');


/*function testing using assert function;
assert.equal(printShoppingList(),);
*/
//returns the shopping list in a preferred formart;
function printShoppingList(shoppingList){
	console.log('Shopping list:');
	for(var i=0;i<shoppingList.length;i++){
		var listItem=shoppingList[i];
		console.log('* '+listItem.itemName+" @ R"+listItem.price.toFixed(2));
	}
} 
//Expected Output:
/*Shopping list:
* Bread @ R11.00
* Milk @ R7.00
* Cheese @ R19.50*/
