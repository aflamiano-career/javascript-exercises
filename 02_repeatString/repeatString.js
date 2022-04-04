const repeatString = function(phrase, count) {
    let resultPhrase = '';
    if (count >= 0) {
        for (x = 0; x < count; x++) {
            resultPhrase += phrase;
        }
    } else {
        return 'ERROR';
    }
    return resultPhrase;
};

// Do not edit below this line
module.exports = repeatString;
