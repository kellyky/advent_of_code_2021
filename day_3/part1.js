// reminder to update the input file to input.txt
// const fs = require("fs");

// const input = fs
//   .readFileSync("sampleInput.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
  // .map((x) => parseInt(x));

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const length = (numbers) => numbers.length;
const numbers = ['00100', '11110', '10110'];

const powerSlice = (numbers, index) => {
  let column = [];
  let gammaArr = [];
  let epsilonArr = [];
  for (let i in numbers) {
    const entry = numbers[i];
    column.push(entry[index]);
  }

  let gamma = 0;
  let epsilon = 0;
  const colSum = column.reduce(sum);

  // const isOnes = colSum.filter(col => col == 1)V;
  const onesArr = column.filter(x => x == 1);
  const zeroesArr = column.filter(x => x == 0);

  onesArr.length > zeroesArr.length ? gamma += 1 : epsilon += 1;

  gammaArr.push(gamma);
  epsilonArr.push(epsilon);

    
  // let's see what we're seeing... 
  console.log('gamma: ' + gamma + ' | epsilon: ' + epsilon);
  console.log('gammaArr: ' + gammaArr + ' | epsilonArr: ' + epsilonArr);
  console.log('Ones: ' + onesArr);
  console.log('sum : ' + colSum);

  
}

const powerConsuption = (gamma, epsilon) => gamma * epsilon;

console.log('powerSlice: ' + powerSlice(numbers, 3));
