// reminder to update the input file to input.txt
// const fs = require("fs");

// const input = fs
//   .readFileSync("sampleInput.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
  // .map((x) => parseInt(x));

// Day 3: https://adventofcode.com/2021/day/3


// sum of vertical index-slice of array (I suspect this boilerplate formulat needs some work)
const sum = (x, y) => x + y;

// length calculates length of input - numbers or whatever I rename it to
const length = (numbers) => numbers.length;

// placeholder set, will need to change this out for the real input
const numbers = ['00100', '11110', '10110'];

const numArrI = (numbers, index) => {
  let arr = [];
  for (let i in numbers) {
    const entry = numbers[i];
    arr.push(entry[index]);
  }
  return arr;
}


// function returns array of numbers[index]
// let indicesI = (numbers, index) => {
//   let numArrI = [];
//   let gamma = 0;
//   let epsilon = 0;

// }

// Once it's working, it'll calculate the gamma for the indicesI :-)
const gammaAdder = indicesI => {
  let gamma = 0;
  sum < length / 2 ? gamma += 1 : gamma += 0;
  return gamma;
}

// console.log(indicesI).reduce(add);
console.log('length: ' + length(numbers));
console.log('numArrI: ' + numArrI(numbers, 2));
