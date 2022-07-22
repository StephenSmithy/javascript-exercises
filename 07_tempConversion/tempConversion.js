const ftoc = function(tempF) {
  return Math.round(10 * (tempF - 32) / 1.8) / 10;
};

const ctof = function(tempC) {
  return Math.round(10 * ((tempC * 1.8) + 32)) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
