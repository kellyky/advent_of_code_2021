// reminder to update the input file to input.txt
const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)
  // .map((x) => parseInt(x));

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const length = (readings) => readings.length;
const arraySum = array => array.reduce(sum);
// const readings = ['00100', '11110', '10110'];

const powerSlice = (readings, index) => {
  // Obtain the vertical slice
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }

  // Defining gamma and epsilon
  let gamma = [];
  let epsilon = [];
  readings.map(powerReading => { 
    const onesInPowerSlice = column.filter(x => x == 1);
    onesInPowerSlice.length > (readings.length / 2) 
      ? gamma.push(1)
      : epsilon.push(0);
    // onesInPowerSlice.length > (readings.length / 2) 
    //   ? gamma += 1
    //   : epsilon += 1;
  });

  

  


  console.log(`\ngamma: ${gamma} | epsilon: ${epsilon} \n`);
  return gamma * epsilon;


}

console.log('powerSlice: ' + powerSlice(readings, 1));
// console.log('powerConsumption: ' + powerConsumption(powerSlice));
