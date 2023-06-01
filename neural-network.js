const weighedSum = (inputs, _weights) => {
    const output = inputs.reduce((acc, input, index) => acc += input * _weights[index], 0);

    return output;
}

let weights = [[0.1, 0.2, 0]];

const getWinningProbability = (input, _weights) => {
    const prediction = weighedSum(input, _weights);

    return prediction;
}

const numberOfToes = [8.5, 9.5, 10, 9];
const winRate = [0.65, 0.8, 0.8, 0.9];
const fansCountBillions = [1.2, 1.3, 0.5, 1.0];

const input = [numberOfToes[0], winRate[0], fansCountBillions[0]];

const winningProbability = getWinningProbability(input, weights[0]);

// ------------------------------------------------------------------------

const elementWiseMulti = (n, vector) => {
    return vector.map((vectorComponent) => n * vectorComponent);
}

weights.push([0.3, 0.2, 0.9]);

const getWinningSadnessAndTraumaProbabilities = (input, _weights) => {
    prediction = elementWiseMulti(input, _weights);

    return prediction;
}

const prediction2 =  getWinningSadnessAndTraumaProbabilities(0.65, weights[1]);

console.log(prediction2);