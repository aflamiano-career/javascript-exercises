const sumAll = function(addend1, addend2) {
    let start = 0;
    let end = 0;
    let sum = 0;
    // if (typeof addend1 === "string" || typeof addend2 === "string") {
    if (!Number.isInteger(addend1) || !Number.isInteger(addend2)) {
        return('ERROR');
    } else if (addend1 < 0 || addend2 < 0) {
        return('ERROR');
    } else {
        if (addend1 < addend2) {
            start = addend1;
            end = addend2;
        } else {
            start = addend2;
            end = addend1;
        }
        
        for (x = start; x <= end; x++) {
            sum = sum + x;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
