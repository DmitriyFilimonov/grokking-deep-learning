const weighedSum = (inputs, _weights) => {
  const output = inputs.reduce((acc, input, index) => acc += input * _weights[index], 0);

  return output;
}

let weights = [0.1, 0.2, 0];

const getWinningProbability = (input, _weights) => {
  const prediction = weighedSum(input, _weights);

  return prediction;
}

const numberOfToes = [8.5, 9.5, 10, 9];
const winRate = [0.65, 0.8, 0.8, 0.9];
const fansCountBillions = [1.2, 1.3, 0.5, 1.0];

const input = [numberOfToes[0], winRate[0], fansCountBillions[0]];

const winningProbability = getWinningProbability(input, weights);

// ------------------------------------------------------------------------

const elementWiseMulti = (n, vector) => {
  return vector.map((vectorComponent) => n * vectorComponent);
}

const hiddenWeightsObject = {
  traumas: [0.1, 0.2, -0.1],
  winRate: [-0.1, 0.1, 0.9],
  sadness: [0.1, 0.4, 0.1]
}

const getWinningSadnessAndTraumaProbabilities = (input, _weights) => {
  prediction = elementWiseMulti(input, _weights);

  return prediction;
}

const predictionWeightsObject = {
  traumas: [0.3, 1.1, -0.3],
  winRate: [0.1, 0.2, 0],
  sadness: [0, 1.3, 0.1]
} 

const hiddenWeights = [hiddenWeightsObject.traumas, hiddenWeightsObject.winRate, hiddenWeightsObject.sadness];

const predictionWeights = [predictionWeightsObject.traumas, predictionWeightsObject.winRate, predictionWeightsObject.sadness];

const multipleLayersWeights = [hiddenWeights, predictionWeights];

const matrixMulti = (vector, matrix) => {
  return matrix.map(matrixItem => weighedSum(vector, matrixItem));
}

const withHiddenLayer = (input, weights) => {
  const hiddenPrediction = matrixMulti(input, weights[0]);
  const prediction = matrixMulti(hiddenPrediction, weights[1]);

  return prediction;
}

console.log({ withHiddenLayer: withHiddenLayer(input, multipleLayersWeights) });