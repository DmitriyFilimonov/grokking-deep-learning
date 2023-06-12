const { weighedSum } = require('../weighed-sum');
const { matrixMulti } = require('../matrix-multi');

let weights = [0.1, 0.2, -0.1];

const toes = [8.5, 9.5, 9.9, 9.0];
const wlRec = [0.65, 0.8, 0.8, 0.9];
const nFans = [1.2, 1.3, 0.5, 1.0];

const inputs = [toes[0], wlRec[0], nFans[0]];

const winOrLoseBinary = [1, 1, 0, 1];

const target = winOrLoseBinary[0];

const alpha = 0.01;

const neuralNetwork = (input, weights) => {
  const prediction = weighedSum(input, weights);

  return prediction;
}

for (let i = 0; i < 30; i++){
  const prediction = neuralNetwork(inputs, weights);

  const pureError = prediction - target;

  const weightDeltas = inputs.map(input =>  matrixMulti([pureError], [[input]]));

  weights = weightDeltas.map(([weightDelta], index) => weights[index] - alpha * weightDelta)

  console.log({ prediction, weights });
}






