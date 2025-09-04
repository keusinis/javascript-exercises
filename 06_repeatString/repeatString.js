const repeatString = function(str, repeatNum) {
    if (repeatNum < 0)
        return "ERROR";
    let accumulator = '';
    for (let i = 0; i < repeatNum; i++)
        accumulator += str;
    return accumulator;
};

// const repeatString = function(str, repeatNum) {
//     if (repeatNum <   0)
//         return "ERROR";
//     if (repeatNum === 0)
//         return '';
//     if (repeatNum === 1)
//         return str;
//     return str + repeatString(str, --repeatNum);
// }

// Do not edit below this line
module.exports = repeatString;
