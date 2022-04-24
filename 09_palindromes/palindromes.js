const palindromes = function (palindrome) {
    const rawString = palindrome
                                .replace(/[^A-Za-z]/g, '')
                                .toLowerCase();
    const reverseString = rawString
                                .split('')
                                .reverse()
                                .join('');
    // console.log({rawString});
    // console.log({reverseString});
    return rawString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
