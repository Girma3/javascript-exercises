const removeFromArray = function(myarray,...args) {
    //loop through both both array and compare each element if equal value found we remove it
    //...args is array we can accept multiple arguments in the form of array it is called spread method.

    for(let i = 0;i < args.length; i++){
        /*the second loop is count  backward  because when we remove item the index reshuffles 
        *to deal with that we start from the last item
        */

        for(let j = myarray.length -1  ;j >= 0; j--){
        //only remove using slice if items are same

            if(myarray[j] === args[i]){
               myarray.splice(j,1)
            }

        }
    }
   return myarray;

};


// Do not edit below this line
module.exports = removeFromArray;
