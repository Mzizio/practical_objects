/*
One of your friends wants to start a second hand car dealership and is doing some market research
Your friend now wants to know
For a few towns he recorded the, model, color and make. As he needs to decide which models to sells and where to open his dealership.

Each object in the list looks like this:


var car = {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
}


What make is the most popular? (mostPopularCar)
How many Nissan's are from Malmesbury? (nissansFromCK)
Which town has the most blue cars? (mostBlueCars)
What town has the fewest orange cars? (fewestOrangeCars)
What is the most popular model car overall? (mostPopularModel)
What is the most popular model car in Stellenbosch? (mostPopularCL)
What is the least popular model car in Kuilsriver? (leastPopularCF)
There's more

Your friend also wants this data:

all the cars for any given town carsForTown('townname')
all the cars for a specific color for a specific town numberOfCars('blue', 'town name')
the cars for a specific color & model for a specific town numberOfCarsPerModel('blue', 'model', 'town name')
the most popular color car for any given town mostPopularColor('townname')*/

/*Created By:Name:Mxolisi D Mtshali
            Date:05-02-2017;
*/
//import assert function to test your functions;
const assert = require('assert');

//data used for testing
var cars = [ {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CL 61045"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 16875"
},  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CK 32655"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "EcoSport",
  "reg_number": "CL 11318"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CJ 16103"
},  {
  "color": "orange",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CL 42789"
},  {
  "color": "blue",
  "make": "Volkswagen",
  "model": "Jetta",
  "reg_number": "CA 46977"
},  {
  "color": "white",
  "make": "Volkswagen",
  "model": "Polo",
  "reg_number": "CY 25661"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Micra",
  "reg_number": "CY 35475"
},  {
  "color": "white",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CY 54886"
},  {
  "color": "white",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CJ 16455"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 57166"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CL 77790"
},  {
  "color": "blue",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CY 98904"
},  {
  "color": "white",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CF 75599"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CA 5510"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Focus",
  "reg_number": "CF 75586"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CA 46137"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CK 22692"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CF 33543"
},  {
  "color": "red",
  "make": "Volkswagen",
  "model": "Touran",
  "reg_number": "CA 94890"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CY 82252"
},  {
  "color": "blue",
  "make": "Toyota",
  "model": "Yaris",
  "reg_number": "CL 9538"
},  {
  "color": "white",
  "make": "Nissan",
  "model": "Juke",
  "reg_number": "CF 62002"
},  {
  "color": "orange",
  "make": "Ford",
  "model": "Fiesta",
  "reg_number": "CJ 67577"
},  {
  "color": "blue",
  "make": "Ford",
  "model": "Ranger",
  "reg_number": "CA 77852"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Hilux",
  "reg_number": "CY 52435"
},  {
  "color": "blue",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CL 76173"
},  {
  "color": "red",
  "make": "Toyota",
  "model": "Tazz",
  "reg_number": "CL 38315"
},  {
  "color": "orange",
  "make": "Toyota",
  "model": "Corolla",
  "reg_number": "CK 41166"
}];

//function testing using assert function;
assert.equal(mostPopularCar(cars),'Toyota')//Most popular car is: Toyota;
assert.equal(nissansFromCK(cars),1);//The quantity of Nissan's from Malmesbury is:1;
assert.equal(mostBlueCars(cars),'Cape Town');//Cape Town has the most blue cars;
assert.equal(fewestOrangeCars(cars),'Kuilsriver');//Kuilsriver has the fewest orange cars of quantity: 1;
assert.equal(mostPopularModel(cars),'Corolla');//Corolla is the most popular model car overall;
assert.equal(mostPopularCL(cars),'Tazz');//Tazz is the first most popular model car in Stellenbosch;
assert.equal(leastPopularCF(cars),'Juke ');//Juke is the first least popular model car in Kuilsriver;
assert.equal(carsForTown(cars,'Cape Town'),'Volkswagen,Toyota,Ford');//Cars that belongs to Cape Town are :Volkswagen,Toyota,Ford;
assert.equal(numberOfCars(cars,'blue', 'Cape Town'),2)//The number of cars from Cape Town is: 2;
assert.equal(numberOfCarsPerModel(cars,'red','Touran','Cape Town'),1)//The number of cars from Cape Town is: 1;
assert.equal(mostPopularColor(cars,'Cape Town'),'blue')//Cars that belongs to Cape Town mostly have color :blue;

//returns  the most popular car in the given object;
function mostPopularCar(cars){
    //declaring and initialisation of necessary variables to be used;
	var car_obj={};
  	var pop_car="";
  	var car_count=0;
  
  for(var i=0;i<cars.length;i++){
  	//check for specific car in an object of cars;
    if(cars[i].make in car_obj){
    	//if there is a same car in car_obj increment;
      car_obj[cars[i].make]+=1;
    }else{
    	//if there is no car take it as first
       car_obj[cars[i].make]=1;
    }
        
  }
  //search for a car appearing the most from the car_obj;
   for(var car in car_obj){
      if(car_obj[car] > car_count){
        car_count=car_obj[car];
        pop_car=car;
        }
      }
      //returns the most popular car;
 return pop_car;
  }

//returns all the nissans from Malmesbury;
function nissansFromCK(cars){
	//declaring and initialisation of necessary variables to be used;
  	var nissan_obj={};
  	var car_count=0;
  
  for(var i=0;i<cars.length;i++){
  	//checks if the car is indeed a nissan and is it from Malmesbury;
    if(cars[i].make==="Nissan" && cars[i].reg_number.startsWith('CK') && cars[i].reg_number.split(" ")[0] in nissan_obj){
    	//if it exit add on it
       nissan_obj[cars[i].reg_number.split(" ")[0]]++;
      }else if(cars[i].make==="Nissan" && cars[i].reg_number.startsWith('CK')){
      	//it is not in nissan_obj
       nissan_obj[cars[i].reg_number.split(" ")[0]]=1;
      }
  }

  //search for a car appearing the most from the nissan_obj;
    for(var car in nissan_obj){
    if(nissan_obj[car]>car_count){
      car_count=nissan_obj[car];
      }
    }
  //returns number of nissan from Malmesbury;
  return car_count;
  }

 //returns most blue cars from the car obj;
  function mostBlueCars(cars){
  	var blue_car_obj={};
  	var town="";
  	var quantity=0;

  	for (var i = 0; i < cars.length; i++) {
  		//checks if the car is indeed blue and is in blue_car_obj;
  		if (cars[i].color==="blue" && cars[i].reg_number.split(" ")[0] in blue_car_obj) {
  			//if exist continue;
  			blue_car_obj[cars[i].reg_number.split(" ")[0]]++;
  		}else{
  			//if its the first;
  			blue_car_obj[cars[i].reg_number.split(" ")[0]]=1;
  		}
  	}
    //check for the most blue car town
    for(car in blue_car_obj){
    	if(blue_car_obj[car]>quantity){
    		quantity=blue_car_obj[car];
    		town=car;
    	}
    }
   
    switch(town){
   
    case 'CK':return "Malmesbury";
    break;
    case 'CJ':return"Paarl";
    break;
    case 'CY':return "Bellville";
    break;
    case 'CL':return "Stellenbosch";
    break;
    case 'CA':return "Cape Town";
    break;
    case 'CF':return "Kuilsriver";
    break;
    default:return "There is no car @ this town";

    }

  }

 //returns the fewest orange cars from cars object;
 function fewestOrangeCars(cars){
	 //initialisation and declaration of necessarily variables;
	 var orange_car_obj={};
	 var over_1oc=[];
	 var least_oc=1;
  	 var town="";
	 
	 for (var i = 0; i < cars.length; i++) {
		 //checks for color; 
		 if (cars[i].color==="orange" && cars[i].reg_number.split(" ")[0] in orange_car_obj) {
  			//if obj exist continue ;
  			orange_car_obj[cars[i].reg_number.split(" ")[0]]++;
  		}else{
  			//if its first obj
  			orange_car_obj[cars[i].reg_number.split(" ")[0]]=1;
  		}
  	}
  	//returns orange car;
    for(oc in orange_car_obj){
      if(!(orange_car_obj[oc] > least_oc)){
         least_oc=orange_car_obj[oc];
         town=oc;
         //when there are more than one car with  same quantity of fewest orange color;
      }if(least_oc===orange_car_obj[oc]){
         over_1oc.push(oc);
      }
    	
    }
    switch(town){
    case 'CK':return "Malmesbury";
    break;
    case 'CJ':return "Paarl";
    break;
    case 'CY':return "Bellville";
    break;
    case 'CL':return "Stellenbosch";
    break;
    case 'CA':return "Cape Town";
    break;
    case 'CF':return "Kuilsriver";
    break;
    default:return "There is no car @ this town"+town;

    }

  }

//returns most popular model of cars
function mostPopularModel(cars){
  //local variables;
  var model_obj={};
  var pop_model="";
  var model_count=0;
  
  for(var i=0;i<cars.length;i++){
  	//check for car model;
    if(cars[i].model in model_obj){
    //if there is one continue;
      model_obj[cars[i].model]+=1;
    }else{
    //means its the first one;
       model_obj[cars[i].model]=1;
    }
        
  }
  //returns most popular model from model_obj;
   for(var model in model_obj){
      if(model_obj[model] > model_count){
        model_count=model_obj[model];
        pop_model=model;
        }
   }
 //returns the most popular model car overall;
 return pop_model;
}

//returns most popular Stellenbosch;
function mostPopularCL(cars){
	//local variables;
         var cl_model_obj={};
         var cl_pop_mdl="";
         var cl_pmdl=1;
         var over1_pop_cl=[];

         for(var i=0;i<cars.length;i++){
         	//confirms if its a correct town namely Stellenbosch;
         	if(cars[i].model  in cl_model_obj && cars[i].reg_number.split(' ')[0]==='CL'){
         		//already exist continue;
                 cl_model_obj[cars[i].model]++;
            }else if(cars[i].reg_number.split(' ')[0]==='CL'){
            	//its a first one;
            	cl_model_obj[cars[i].model]=1;
            }
        }
        //returns most popular car model from Stellenbosch;
        for(var clmdl in cl_model_obj){
        	if(!(cl_model_obj[clmdl] > cl_pmdl)){
        		cl_pmdl=cl_model_obj[clmdl];
        		cl_pop_mdl=clmdl;
        //if there is more than one with same quantity;
        	}if(cl_pmdl===cl_model_obj[clmdl]){
                over1_pop_cl.push(cl_pop_mdl);
            }
        }
        //returns one of most popular model car in Stellenbosch;
        return cl_pop_mdl;
      
    }

//returns least popular model car in Kuilsriver;
function leastPopularCF(cars){
	//variables necessarily ;
         var cl_model_obj={};
         var cl_pop_mdl="";
         var cl_pmdl=1;
         var over1_pop_cl=[];

         for(var i=0;i<cars.length;i++){
         	//confirms that is the town indeed Kuilsriver;
         	if(cars[i].model  in cl_model_obj && cars[i].reg_number.split(' ')[0]==='CF'){
            //model already exist continue;
                 cl_model_obj[cars[i].model]++;
            }else if(cars[i].reg_number.split(' ')[0]==='CF'){
            //first model ;
            	cl_model_obj[cars[i].model]=1;
            }
        }
        //returns popular car model in Stellenbosch;
        for(var clmdl in cl_model_obj){
        	if(!(cl_model_obj[clmdl] > cl_pmdl)){
        		cl_pmdl=cl_model_obj[clmdl];
        		cl_pop_mdl=clmdl;
        	}if(cl_pmdl===cl_model_obj[clmdl]){
                over1_pop_cl.push(cl_pop_mdl);
            }
        }
        //the first most popular model car in Stellenbosch if more one car are popular;
         return cl_pop_mdl;
    }

//returns all the cars for any given town
function carsForTown(cars,townname){
	//local variables;
         var car_city_obj={};
         var all_cars=[];
         var reg_num="";
	
	switch(townname){
		case "Malmesbury":return reg_num='CK';
		break;
    		case   "Paarl"   :return reg_num='CJ';
            	break;
    		case "Bellville" :return reg_num='CY';
            	break;
    		case "Stellenbosch":return reg_num='CL';
            	break;
    		case "Cape Town" :return reg_num='CA';
            	break;
    		case "Kuilsriver":return reg_num='CF' ;
            	break;
    		default:return "There is no car @ this town"+townname;
	}
	
	for (var i = 0; i < cars.length; i++) {
	//confirms that is the town indeed a given town;
	if(cars[i].make in car_city_obj && cars[i].reg_number.split(' ')[0]===reg_num){
	//make already exist continue;
		car_city_obj[cars[i].make]++;
	}else if (cars[i].reg_number.split(' ')[0]===reg_num) {
	//make is not in car_city_obj;
		car_city_obj[cars[i].make]=1;
	}
}
//creates array off cars that belongs to the given town;
  for(car in car_city_obj ){
  all_cars.push(car);
  }
//array off cars that belongs to the given town;
return all_cars;
}

//returns all the cars for a specific color for a specific town; 
function numberOfCars(cars,color,townname){
	//local variables;
	var car_city_obj={};
	var all_cars=[];
	var reg_num="";
	var count=0;
	
	switch(townname){
		case "Malmesbury":return reg_num='CK';
    		break;
    		case   "Paarl"   :return reg_num='CJ';
        	break;
    		case "Bellville" :return reg_num='CY';
        	break;
    		case "Stellenbosch":return reg_num='CL';
        	break;
    		case "Cape Town" :return reg_num='CA';
        	break;
    		case "Kuilsriver":return reg_num='CF' ;
        	break;
		default:return "There is no car @ this town"+townname;
       }
	
	for (var i = 0; i < cars.length; i++) {
		//confirm color model and car;
		if(cars[i].make in car_city_obj && cars[i].reg_number.split(' ')[0]===reg_num && cars[i].color===color){
		//make already exist continue;
		car_city_obj[cars[i].make]++;
		}else if (cars[i].reg_number.split(' ')[0]===reg_num && cars[i].color===color) {
		//make for the first time;
		car_city_obj[cars[i].make]=1;
		}
	}
	
	//creates array of all cars with the specified color ;
	for(car in car_city_obj ){
		all_cars.push(car);
	}
	//counts cars of specific color;
	for(var i=0;i<all_cars.length;i++){
		count++;
	}
	//returns all cars of specified color and town;
	return count;
}

//returns the cars for a specific color & model for a specific town 
function numberOfCarsPerModel(cars,color, model, townname){
		var car_city_obj={};
		var all_cars=[];
		var reg_num="";
	
	switch(townname){
    	case "Malmesbury":return reg_num='CK';
    	break;
    	case   "Paarl"   :return reg_num='CJ';
        break;
    	case "Bellville" :return reg_num='CY';
    	break;
    	case "Stellenbosch":return reg_num='CL';
        break;
    	case "Cape Town" :return reg_num='CA';
        break;
		case "Kuilsriver":return reg_num='CF' ;
        break;
    	default:return "There is no car @ this town";
}
	
	for (var i = 0; i < cars.length; i++) {
		//confirms model and color;
		if(cars[i].make in car_city_obj && cars[i].reg_number.split(' ')[0]===reg_num && cars[i].color===color && cars[i].model===model){
			//car already exist continue;
			car_city_obj[cars[i].make]++;
		}else if (cars[i].reg_number.split(' ')[0]===reg_num && cars[i].color===color && cars[i].model===model) {
			//first time car;
			car_city_obj[cars[i].make]=1;
		}
	}
	//creates array of specified car;
	for(car in car_city_obj ){
		all_cars.push(car);
	}
	//counts cars of specific color & model;
	for(var i=0;i<all_cars.length;i++){
		count++;
	}
	//return Cars that belongs to townname which are  have specific color and the model type;
	return count;
}
//returns the most popular color car for any given town 
function mostPopularColor(cars,townname){
	//local variables;
	var car_city_obj={};
        var all_cars=[];
        var reg_num="";
	
	switch(townname){
		case "Malmesbury":return reg_num='CK';
    		break;
    		case   "Paarl"   :return reg_num='CJ';
            	break;
    		case "Bellville" :return reg_num='CY';
		break;
    		case "Stellenbosch":return reg_num='CL';
            	break;
    		case "Cape Town" :return reg_num='CA';
            	break;
    		case "Kuilsriver":return reg_num='CF' ;
            	break;
    		default:return "There is no car @ this town: "+townname;
       }
	
	for (var i = 0; i < cars.length; i++) {
		//confirms color and townname;
		if(cars[i].color in car_city_obj && cars[i].reg_number.split(' ')[0]===reg_num){
			//color already exist continue;
			car_city_obj[cars[i].color]++;
		}else if (cars[i].reg_number.split(' ')[0]===reg_num) {
			//color for first time;
			car_city_obj[cars[i].color]=1;
		}
	}
	//creates array of popular color from the specified city;
	for(color in car_city_obj ){
		if(car_city_obj[color]>color_count){
			color_count=car_city_obj[color];
			pop_color=color;
		}
	}
	//returns mostly popular colors namely
	return pop_color;
}
