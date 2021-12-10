const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3

const sum = (x, y) => x + y;
const length = (readings) => readings.length;
const arraySum = array => array.reduce(sum);
const halfReadingLength = readings.length / 2;


const bitColumnSlicer = (readings, index) => {
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  return column;
}


const bitIndexReadings = [bitColumnSlicer(readings, 0), bitColumnSlicer(readings, 1), bitColumnSlicer(readings, 2), bitColumnSlicer(readings, 3), bitColumnSlicer(readings, 4),bitColumnSlicer(readings, 5),bitColumnSlicer(readings, 6),bitColumnSlicer(readings, 7),bitColumnSlicer(readings, 8),bitColumnSlicer(readings, 9),bitColumnSlicer(readings, 10),bitColumnSlicer(readings, 11)]


const thisManyOnesPerBit = bitIndexReadings.map((column => { 
  return column.filter(x => x == 1);
}))

const gamma = thisManyOnesPerBit.map( countedOnes => {
  return countedOnes.length > halfReadingLength ? '1' : '0';
})

const gammaToDecimal = gamma => {
  const gammaToInt = gamma.join('');
  return parseInt(gammaToInt, 2);
}

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const epsilonToDecimal = epsilon => {
  const epsilonToInt = epsilon.join('');
  return parseInt(epsilonToInt, 2);
}

const powerReading = (gammaToDecimal, epsilonToDecimal) => {
  const power = gammaToDecimal(gamma) * epsilonToDecimal(epsilon);
  return power;
}

console.log(powerReading(gammaToDecimal, epsilonToDecimal));
