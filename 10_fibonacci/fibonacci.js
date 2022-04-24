const fibonacci = function(indexToReturn) {
    let fibonacciValues = [];
    let temp = 0;

    if (indexToReturn < 0) {
        return 'OOPS';
    }

    fibonacciValues[0] = 1;
    for (i = 1; i < indexToReturn; i++) {
        fibonacciValues[i] = fibonacciValues[i-1] + temp;
        temp = fibonacciValues[i-1]
    }
    // console.table(fibonacciValues);
    return fibonacciValues[indexToReturn - 1];
};

// Do not edit below this line
module.exports = fibonacci;
