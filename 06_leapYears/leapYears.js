const leapYears = function(year) {
    let leapFlag = false;
    if (year % 4 === 0 && year % 100 != 0) {
        leapFlag = true;
    } 
    if (year % 400 === 0) {
        leapFlag = true;
    }
    return leapFlag
};

// Do not edit below this line
module.exports = leapYears;
