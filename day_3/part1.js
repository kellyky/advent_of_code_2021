// reminder to update the input file to input.txt
// const fs = require("fs");

// const input = fs
//   .readFileSync("sampleInput.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
  // .map((x) => parseInt(x));

// Day 3: https://adventofcode.com/2021/day/3
//


const sum = (x, y) => x + y;
const length = (numbers) => numbers.length;
const numbers = ['00100', '11110', '10110'];

let indicesI = (numbers, index) => {
  let numArrI = [];
  for (let i in numbers) {
    const entry = numbers[i];
    numArrI.push(entry[index]);
  }
  return numArrI;
}

const gammaAdder = indecesI => {
  let gamma = 0;
  indicesI.
  sum < length / 2 ? gamma += 1 : gamma += 0;
  return gamma;
}
// console.log(indicesI).reduce(add);
console.log('length: ' + length(numbers));
console.log('indices returns: ' + indicesI(numbers, 0));
console.log(gammaAdder(indicesI));
