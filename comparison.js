const neuralNetwork = (input, weight) => {
    const prediction = input * weight;
    
    return prediction;
}

let weight = 0.5;
const input = 0.5;
const goal_target = 0.8;

const step = 0.001;

for (let i = 0; i < 1101; i++) {
    const prediction = neuralNetwork(input, weight);
    const error = Math.pow(prediction - goal_target, 2);

    console.log(`Error: ${error}. Prediction: ${prediction}`);

    const increasedWeight = weight + step;
    const increasedWeightPrediction = neuralNetwork(input, increasedWeight);
    const increasedWeightError = Math.pow(increasedWeightPrediction - goal_target, 2);

    const decreasedWeight = weight - step;
    const decreasedWeightPrediction = neuralNetwork(input, decreasedWeight);
    const decreasedWeightError = Math.pow(decreasedWeightPrediction - goal_target, 2);

    if (decreasedWeightError < increasedWeightError) {
        weight = decreasedWeight;
    }

    if (decreasedWeightError > increasedWeightError) {
        weight = increasedWeight;
    }
}


