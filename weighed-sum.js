
/**
 * 
 * @param {number[]} inputs 
 * @param {number[]} weights 
 * @returns {number}
 */
const weighedSum = (inputs, weights) => {
  const output = inputs.reduce((_weighedSum, currentInput, index) => {
    const currentWeight = weights[index];
    _weighedSum += currentInput * currentWeight;
  
    return _weighedSum;
  }, 0);

  return output;
}

module.exports = {
  weighedSum
}