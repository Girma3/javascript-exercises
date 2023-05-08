const leapYears = function(year) {

    //if the year is divisible by 100 and 400 it is leap year
    if (year % 100 === 0 && year % 400 === 0){
        return true;
    }

    // if the year is divisible by 4 but not by 100 it is leap year
    else if (year % 4 ===0 && year % 100 !== 0){
       return true;
    }

    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
