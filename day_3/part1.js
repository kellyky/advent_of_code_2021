// reminder to update the input file to input.txt
// const fs = require("fs");

// const input = fs
//   .readFileSync("sampleInput.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
  // .map((x) => parseInt(x));

// Day 3: https://adventofcode.com/2021/day/3


// sum of vertical index-column of array (I suspect this boilerplate formulat needs some work)
const sum = (x, y) => x + y;


// length calculates length of input - numbers or whatever I rename it to
const length = (numbers) => numbers.length;


// placeholder set, will need to change this out for the real input
const numbers = ['00100', '11110', '10110'];

const verticalSlice = (numbers, index) => {
  let column = [];
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


  onesArr.length > zeroesArr ? gamma += 1 : gamma += 0;
  onesArr.length > zeroesArr ? epsilon += 0 : epsilon += 1;

    
  console.log('gamma: ' + gamma + ' | epsilon: ' + epsilon);

  
  console.log('Ones: ' + onesArr);
  


  console.log('sum : ' + colSum);
  //
  // return column;
}




// const gamma = vericalSlice => {
//   // defining our starting points for gamma, eps, and we'll use powerArray to collect the goods
//   let gammaRate = 0;
//   let powerArray = [];
// }

const powerComsuption = (gamma, epsilon) => gamma * epsilon;

// console.log(indicesI).reduce(add);
console.log('length: ' + length(numbers));
console.log('verticalSlice: ' + verticalSlice(numbers, 1));
// console.log('gamma: ' + gamma(verticalSlice));
