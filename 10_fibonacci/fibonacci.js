const fibonacci = function(userNum) {
    // check if the user enter negative number and convert if string enterd to number
let num = Number(userNum);
if(userNum < 0) return "OOPS"

    
    let a = 0;
    let b = 1;
    let c = num
    // use for loop as we iterate each value interchange place
    for(let i = 1;i<num;i++ ){
        c = a + b;
        a = b;
        b = c;
        
    }
return c
};

// Do not edit below this line
module.exports = fibonacci;
