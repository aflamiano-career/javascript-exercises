const removeFromArray = function(array, ...outed) {
    let resultingArray = array;
    outed.forEach(function(outedItem) {
        resultingArray = resultingArray.filter(function(arrayItem) {
            return arrayItem !== outedItem;
        });
    });
    console.log('troll');
    console.log('troll2');
    return resultingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
