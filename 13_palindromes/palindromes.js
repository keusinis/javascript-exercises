const palindromes = function (str) {
let charArr = str
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z0-9]/));
return charArr.join("") === charArr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;


