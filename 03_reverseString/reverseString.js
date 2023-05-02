

const reverseString = function(word) {
    
     // store letters in array form by using  split
     let wordSlice = word.split("");

     //we reverse the array and put it in sliceArray
     let sliceArray = wordSlice.reverse();
     
    let finalWord = "";//to store the reversed string at end
    
     //we use for loop on slicearray element and store them in finalWord  variable as reverse string
     for ( i = 0;i < sliceArray.length;i++){
 
         finalWord = finalWord.concat(sliceArray[i]);
     }
     
     return finalWord; 
 
    }
// Do not edit below this line
module.exports = reverseString;
