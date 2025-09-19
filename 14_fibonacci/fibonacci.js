const fibonacci = function(index) {
    if(index < 0)
        return "OOPS";
    // let fibArr = [0, 1];
    // for(let i = 0; i < index; i++) {
    //     fibArr.push(fibArr[i] + fibArr[i + 1]);
    // }
    // return fibArr[index];

    let first = 0;
    let second = 1;
    for(let i = 0; i < index; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
