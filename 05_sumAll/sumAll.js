const sumAll = function(num1,num2) {
 
    //first check return  entered number if it is negative or not a number return error.

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return "ERROR"
       }

    else if(num1 < 0 || num2 < 0){
       return "ERROR"
    }

    /*while loop to add numbers between num1 and num2
    *on while loop condition 1 was added  to include the upper range number between the two
    *use two loop  first one if num1 is greather the second one if it is less than num2
    */

    sum = 0;
        if (num1 > num2){

            n = num2

            while(n<num1+1){
                sum += n
                n++
            }
        }
        else if(num1 < num2){

            n = num1

        while(n < num2+1){
            sum+=n++
        }
        }

    return sum;

};


// Do not edit below this line
module.exports = sumAll;
