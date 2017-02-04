/*Created By:Name:Mxolisi D Mtshali
            Date:02-02-2017;
*/
//import assert function to test your functions;
//const assert = require('assert');


/*function testing using assert function;
assert.equal(mostWordsEndWith(),);
*/
//sentence tested and passed;
var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.';
mostWordsEndWith(sentence);
//function returning sequence of words with the most appearing end character;
function  mostWordsEndWith(sentence){
  //declaring and initialisation of necessary variables to be used;
  var words=[];
  var list=sentence.split(" ");
  var char_end=[];
  var res_word=[];
  
  
  for(var i=0;i < list.length;i++){
    //checking if there is a character on word last index;
    if(list[i].slice(-1)){
      //adds word to array of words;
      words.push(list[i]);
      //adds characher to list of all words ending characters;
      char_end.push(list[i].slice(-1));
    }
  }
  //calls for function that return the most appearing ending word;
  var appear_most=getMostAppear(char_end);
  for(var i=0;i < list.length;i++){
    //checks if word last character equals there most appearing character;
    if(list[i].slice(-1)===appear_most){
      //adds to array of words with the most appearing character;
    res_word.push(list[i]);
    }
  } 
  return res_word;
  
  
  //return the most appearing words ending character;
  function getMostAppear(array_of_chars){
    //necessary declared and initialised variables
   var max=0,result,freq = 0;
    
  //iterates through array of words ending characters;
   for(var i=0; i < array_of_chars.length; i++){
     //check if the current character equals there character ahead in an array;
        if(array_of_chars[i]===array_of_chars[i+1]){
            freq++;
        }
        else {
            freq=0;
        }
        if(freq>max){
            result = array_of_chars[i];
            max = freq;
        }
    }
  return result;
   
  
  }
     

}
