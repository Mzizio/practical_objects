/*Created By:Name:Mxolisi D Mtshali
            Date:04-02-2017;
*/
//import assert function to test your functions;
const assert = require('assert');


/*function testing using assert function;
assert.equal(mostProfitableDepartment(),);
assert.equal(mostProfitableDay(),)
*/

//return the most profitable departments  of a local shop;
function mostProfitableDepartment(list){
  //declaring and initialisation of necessary variables to be used;
  var listObject ={};
  var department="";
  var totalSales=0;

  for(var i=0;i < list.length;i++){
    //check for specific department in an object of departments;
    if(list[i].department in listObject){
      //access sales of departments;
      listObject[list[i].department]+=list[i].sales;
    }else{
      listObject[list[i].department]=list[i].sales;
    }
  }
  //get department with the highest total sales;
  for( var dep in listObject){
    if(listObject[dep] > totalSales){
     totalSales=listObject[dep];
      department=dep;
   }
  }
  return department;
}

//returns which day of the week is the most profitable;
function mostProfitableDay(list){
  //declaring and initialisation of necessary variables to be used;
  var listObject ={};
  var profitable_day="";
  var totalSales=0;
  for(var i=0;i < list.length;i++){
    //check for specific day in an object of days;
    if(list[i].day in listObject){
      //access sales of days;
     listObject[list[i].day]+=list[i].sales;
    }else{
    listObject[list[i].day]=list[i].sales;
    }
  }
  //get department with the highest total sales;
  for(var day in listObject){
    if(listObject[day]> totalSales){
      totalSales=listObject[day];
      profitable_day=day;
    }
  }
  return profitable_day;
}

