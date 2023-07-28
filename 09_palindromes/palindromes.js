const palindromes = function (userword) {
//remove punctuation with regular expression and replace it with space
let newformat = userword.replace(/[\s ! ,\.]/g,"").toLowerCase();

//turn the word to  array of letters
let userwordArray = newformat.split("");

// we convert the  word  into an array then reverse it backward 
let reverseUserWord = [...newformat].reverse();

//check backward  and forward string are the same  if it  is true it is palindrome word
let result = userwordArray.toString() === reverseUserWord.toString();

return result;

};

// Do not edit below this line
module.exports = palindromes;
