const findTheOldest = function(people) {
    // ** using a function (ideal)
    const getAge = (deathYear, birthYear) => {
        if (!deathYear) {
            deathYear = new Date().getFullYear();
        }
        return deathYear - birthYear;
    }

    oldestPerson = people.reduce((lastPerson, currentPerson) => {
        // console.log(lastPerson);

        // ** without using a function (explicit)
        // if(!lastPerson.yearOfDeath) {
        //     lastPerson.yearOfDeath = new Date().getFullYear();
        // } 
        // if(!currentPerson.yearOfDeath) {
        //     currentPerson.yearOfDeath = new Date().getFullYear();
        // }
        // const lastPersonAge = lastPerson.yearOfDeath - lastPerson.yearOfBirth;
        // const currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        // ** ONLY ADD THIS IF THERE IS {} INITIALIZATION
        // if (!lastPerson.yearOfBirth) {
        //     return currentPerson;
        // }

        const lastPersonAge = getAge(lastPerson.yearOfDeath, lastPerson.yearOfBirth);
        const currentPersonAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

        // return lastPersonAge < currentPersonAge ? currentPerson : lastPerson; // shorthand
        if (lastPersonAge < currentPersonAge) {
            return currentPerson;
        } else {
            return lastPerson;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
