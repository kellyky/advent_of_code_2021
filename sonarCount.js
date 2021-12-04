const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

const sonarIncreaseCount = (input) => {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]){
      counter++;
    }
  }
  
  return counter;
};

console.log(sonarIncreaseCount(input));
