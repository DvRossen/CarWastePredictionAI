let nn;

function loadData() {
  nn = ml5.neuralNetwork({ task: "regression", debug: true });
  nn.load("./model/model.json", modelLoaded);
}

function modelLoaded() {
  console.log("model loaded");
}

function main() {
  loadData();
  document
    .getElementById("btn")
    .addEventListener("click", predictButtonClicked);
}

async function predictButtonClicked() {
  const horsepower = Number(document.getElementById("horsepower").value);
  const weight = Number(document.getElementById("weight").value);
  const cylinders = Number(document.getElementById("cylinders").value);
  console.log("voorspel voor", { horsepower, weight, cylinders });

  const results = await nn.predict({ horsepower, weight, cylinders });
  console.log("results:", results);

  document.getElementById("result").innerHTML = results[0].mpg;
}

window.onload = main;
