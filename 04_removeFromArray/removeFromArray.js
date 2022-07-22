const removeFromArray = function(...args) {
    let input = args;
    let output = spliceArray(...input);
    return output[0];
};

//Recursive function to splice the element from the array then call again using the new, shorter array. 
function spliceArray(...args) {
    let input = args;
    for (let i = 0; i < input[0].length; i++) {
        for (let j = 1; j <= input.length; j++)
            if (input[0][i] === input[j]) {
                input[0].splice(i,1);
                spliceArray(...input);
                break;
            }
    }
    return input;
}

// Do not edit below this line
module.exports = removeFromArray;
