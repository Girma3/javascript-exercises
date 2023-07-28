const findTheOldest = function(array){
        //calculate the age 
        const findTheAge = ((birth, death) => {

            let alivePeronAge = new Date().getFullYear() - birth;
            return (!death ? alivePeronAge : death - birth);
        });
        
        //use reduce method to hold a person if it's oldest return that person if not check the next person 
        let oldest = array.reduce((firstPeson,nextPerson)=>{
            
            let oldestPerson = findTheAge(firstPeson.yearOfBirth, firstPeson.yearOfDeath);
            
            let currentPerson = findTheAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
            
        return oldestPerson < currentPerson?nextPerson:firstPeson;
        });
    return oldest 
};
   
          


// Do not edit below this line
module.exports = findTheOldest;
