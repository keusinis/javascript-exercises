// const reverseString = function(str) {
//     let arr = str.split('');
//     let reverseArr = [];
//     for (let i = --str.length; i >= 0; i--) {
//         reverseArr.push(arr[i]);
//     }
//     return reverseArr.join('');
// };

const reverseString = function(str) {
    return str.split('').reverse().join('');
}

// Do not edit below this line
module.exports = reverseString;
