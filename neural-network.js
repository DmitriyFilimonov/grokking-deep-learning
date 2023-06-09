const weighedSum = (inputs, _weights) => {
  const output = inputs.reduce((_weighedSum, input, index) => _weighedSum += input * _weights[index], 0);

  return output;
}

const matrixMulti = (vector, matrix) => {
  return matrix.map(matrixItem => weighedSum(vector, matrixItem));
}

// ---------------------- data set ----------------------------------------

const numberOfToes = [8.5, 9.5, 10, 9];
const winRate = [0.65, 0.8, 0.8, 0.9];
const fansCountBillions = [1.2, 1.3, 0.5, 1.0];

// ----------------------- neural network --------------------------------

// ----------------------- input -----------------------------------------
const input = [numberOfToes[0], winRate[0], fansCountBillions[0]];

// ----------------------- hidden layer   --------------------------------
const hiddenWeightsObject = {
  traumas: [0.1, 0.2, -0.1],
  winRate: [-0.1, 0.1, 0.9],
  sadness: [0.1, 0.4, 0.1]
}

const hiddenWeights = [hiddenWeightsObject.traumas, hiddenWeightsObject.winRate, hiddenWeightsObject.sadness];

const hiddenPrediction = matrixMulti(input, hiddenWeights);

// ----------------------- output layer   --------------------------------
const predictionWeightsObject = {
  traumas: [0.3, 1.1, -0.3],
  winRate: [0.1, 0.2, 0],
  sadness: [0, 1.3, 0.1]
}

const predictionWeights = [predictionWeightsObject.traumas, predictionWeightsObject.winRate, predictionWeightsObject.sadness];

const output = matrixMulti(hiddenPrediction, predictionWeights);

// -----------------------------------------------------------------------

console.log({ output });