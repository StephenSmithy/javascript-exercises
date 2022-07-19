const reverseString = function(string = '') {
    let stringLength = string.length;
    let stringArray = string.split('');
    let reverseStringArray = [];

    for (let i = 0; i < string.length; i++) {
        reverseStringArray[i] = stringArray[stringLength - 1 - i];
    }
    let reversedString = reverseStringArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
