const { weighedSum } = require('./weighed-sum');

/**
 * 
 * @param {number[]} vector
 * @param {number[][]} matrix 
 * @returns {number[]}
 */
const matrixMulti = (vector, matrix) => {
  return matrix.map(matrixItem => weighedSum(vector, matrixItem));
}

module.exports = {
  matrixMulti
}