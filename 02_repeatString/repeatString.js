/*
the function accept word and 
use for loop to repeat the word using desired repetition number and  repeat the word desired times and 
return repeated word.
*/

const  repeatString = function(word,repetitionNumber){
        if(repetitionNumber<0) return "ERROR";

        let finalWord="";//variable to hold the repeated word

        for (let i = 0; i < repetitionNumber; i++){
            
             finalWord += word;
        }
          
        return finalWord;
    }
repeatString();


// Do not edit below this line
module.exports = repeatString;
