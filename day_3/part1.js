const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const length = (readings) => readings.length;
const arraySum = array => array.reduce(sum);
// const readings = ['00100', '11110', '10110'];

const powerSlice = (readings, index) => {
  let column = [];

  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  
  console.log(column);

  // Defining gamma and epsilon
  let gamma = [];
  let epsilon = [];
  readings.map(powerReading => { 
    const onesInPowerSlice = column.filter(x => x == 1);
    const zeroesInPowerSlice = column.filter(x => x == 0);
    
    const gamma = (onesInPowerSlice => {
      onesInPowerSlice.length > rereadings.length 
      ? gamma.push(1)
      : gamma.push(0);
      return gamma;
    })
      
    const epsilon = (onesInPowerSlice => {
      onesInPowerSlice.length > zeroesInPowerSlice
      ? epsilon.push(0)
      : epsilon.push(1);
      return epsilon;
    })
  })


  // gamma = gamma.reduce(sum);
  const gammaParsed = parseInt(gamma);
  
  // epsilon = epsilon.reduce(sum);
  const epsilonParsed = parseInt(epsilon);

  console.log(`\ngamma: ${gamma} | epsilon: ${epsilon} \n`);
  return gammaParsed * epsilonParsed;


}

console.log('powerSlice: ' + powerSlice(readings, 0));
// console.log('powerConsumption: ' + powerConsumption(powerSlice));
