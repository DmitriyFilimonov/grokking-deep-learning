const neuralNetwork = (input, weight) => {
  const prediction = input * weight;

  return prediction;
}

let weight = 100;
const goal_target = 165.45;
const input = 2;
const alpha = 0.1;

for (let i = 0; i < 400; i++) {
  const prediction = neuralNetwork(input, weight);
  const pureError = prediction - goal_target
  const errorDirectionAndAmount = pureError * input;
  weight -= errorDirectionAndAmount * alpha

  console.log(`Prediction: ${prediction}. Pure error: ${pureError} Weight: ${weight}.`);
}


