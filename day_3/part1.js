const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3

const sum = (x, y) => x + y;
const listLength = readings.length;
const wordLength = readings[0].length;
const arraySum = array => array.reduce(sum);
const halfReadingLength = readings.length / 2;

const arrOfSlices = array => {
  let outerArr = [];

  for (let i in array) {
    for (let el of array) {
      outerArr.push(el[i]);
    }
  }
  const flattened = outerArr.flat();
  let newestArr = [];

  for (let x = 0; x < (listLength * wordLength); x += listLength){
    let y = x + listLength;

    newestArr.push(flattened.slice(x, y));
  }

  return newestArr;
}

const bitIndexReadings = arrOfSlices(readings);

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
