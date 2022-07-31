const findTheOldest = function(array) {
    const sortedPeople = array.sort(function(a, b) {
        let age1 = getAge(a.yearOfBirth, a.yearOfDeath);
        let age2 = getAge(b.yearOfBirth, b.yearOfDeath);
       if (age2 > age1) {
        return 1;
       } else {
        return -1;
       }
    })
    return sortedPeople[0];
};

function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
