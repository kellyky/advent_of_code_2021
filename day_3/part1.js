const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const length = (readings) => readings.length;
const arraySum = array => array.reduce(sum);
const halfReadingLength = readings.length / 2;


const readingBitSlicer = (readings, index) => {
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  return column;
}


const bitIndexReadings = [readingBitSlicer(readings, 0), readingBitSlicer(readings, 1), readingBitSlicer(readings, 2), readingBitSlicer(readings, 3), readingBitSlicer(readings, 4)]
console.log(bitIndexReadings);


const thisManyOnesPerBit = bitIndexReadings.forEach((bitIndexReadings => { 
    let onesArr = [];
    const allTheOnes = bitIndexReadings.filter(x => x == 1);

    const onesArrMaker = allTheOnes.map(x => {
      onesArr.push(1);
      return onesArr;
    })
      
    const lengthOfOnesArr = onesArrMaker.reduce((sum, x) => {
      return sum + onesArr.length;
    })
  return onesArr;
  }))


const rawPowerReading = bitIndexReadings.map( onesArr => {
  let gamma = [];
  let epsilon = [];

  let gammaReader = bitIndexReadings.map((onesArr) => {
    onesArr.length > halfReadingLength ? gamma.push('1') : gamma.push('0');
    return gamma;
  })

  let epsilonReader = bitIndexReadings.map((onesArr) => { 
    onesArr.length < halfReadingLength ? epsilon.push('1') : epsilon.push('0');
    return epsilon;
  })

  console.log(gamma);
  console.log(epsilon);
  
})

// const rawPowerReading = bitIndexReadings.map( onesArr => {
// const powerReading = (bitIndexReadings, onesArr) => {
//   let gamma = [];
//   let epsilon = [];



// }

// console.log(powerReading(bitIndexReadings[0]));
