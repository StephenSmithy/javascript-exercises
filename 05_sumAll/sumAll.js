const sumAll = function(x, y) {
    if (isNaN(x) || isNaN(y) || (typeof(x) != 'number') || (typeof(y) != 'number') || x < 0 || y < 0) {
        return 'ERROR';
    }
    
    let min = Math.min(x, y);
    let max = Math.max(x, y);

    let lowerSum = (min * (min - 1))/2;
    let upperSum = (max * (max + 1))/2;

    return upperSum - lowerSum;
};

// Do not edit below this line
module.exports = sumAll;
