const fs = require("fs");


const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));

const median = arr => {
  const length = arr.length;
  arr.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[(length - 1) / 2];
}

const horizontalPosition = median(input);

// FUEL used for each move in array
const fuel = input.map(x => Math.abs(x - horizontalPosition));

// Total fuel spent
const totalFuelSpent = fuel.reduce(( x, y ) => x + y);
console.log(totalFuelSpent);
