let weight = 0.1;

const neuralNetwork = (input, weight) => {
    const prediction = input * weight;

    return prediction;
}

const numberOfToes = [8.5, 9.5, 10, 9];

const input = numberOfToes [0];

const prediction = neuralNetwork(input, weight);

console.log(prediction);