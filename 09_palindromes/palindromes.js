const palindromes = function (str) {
    let normalisedString = str.replaceAll(" ", "").replaceAll(/[\p{P}]/gu,"").toLowerCase();
    for (i = 1; i <= normalisedString.length; i++) {
        if (normalisedString[i-1] !== normalisedString[normalisedString.length - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
