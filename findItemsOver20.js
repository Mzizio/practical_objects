/*Created By:Name:Mxolisi D Mtshali
            Date:03-02-2017;
*/

//import assert function to test your functions;
const assert = require('assert');

/*function testing using assert function;
assert.equal(findItemsOver20(),);
assert.equal(findItemsOver(),);
*/

//return all the products that have a quantity higher than 20;
function findItemsOver20(List){
  var result=[];
  for(var i=0;i<List.length;i++){
    if(List[i].qty >20){
      result.push(List[i]);
    }
  }
  return result;
}

//return products that have quantity higher than the threshold;
function findItemsOver(List,threshold){
  var result=[];
  for(var i=0;i<List.length;i++){
    if(List[i].qty > threshold){
      result.push(List[i]);
    }
  }
  return result;
}