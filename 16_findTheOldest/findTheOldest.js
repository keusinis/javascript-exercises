const getAge = function(birth, death) {
    return (death ? death : new Date().getFullYear()) - birth;
}

const findTheOldest = function(arr) {
    arr.sort((a, b) => (getAge(b.yearOfBirth, b.yearOfDeath) - getAge(a.yearOfBirth, a.yearOfDeath)));
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
