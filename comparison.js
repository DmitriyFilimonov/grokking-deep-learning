const neuralNetwork = (input, weight) => {
    const prediction = input * weight;
    
    return prediction;
}

let weight = 100;
const goal_target = 41.365;
const input = 0.5;

for (let i = 0; i < 30; i++) {
    const prediction = neuralNetwork(input, weight);
    const pureError = prediction - goal_target
    const errorDirectionAndAmount = pureError * input;
    weight -= errorDirectionAndAmount

    console.log(`Prediction: ${prediction}. Pure error: ${pureError} Weight: ${weight}.`);
}


