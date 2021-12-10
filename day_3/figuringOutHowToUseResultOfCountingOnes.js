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


// Taken from part1.js
// This file removes the top portion of code and just feeds in the output of the verrtical slices of readings
// I need to use this array to 
  // measure the 1s (and/or 0z)
// From there I need to compare the sum or count of 1s against halfReadingLength
  // and use that to determine gamma and epsilon 
// from there, I need to 


const theArrayINeedToMeasureGammaFor = [
  [
    '0', '1', '1', '1',
    '1', '0', '0', '1',
    '1', '1', '0', '0'
  ],
  [
    '0', '1', '0', '0',
    '0', '1', '0', '1',
    '0', '1', '0', '1'
  ],
  [
    '1', '1', '1', '1',
    '1', '1', '1', '1',
    '0', '0', '0', '0'
  ],
  [
    '0', '1', '1', '1',
    '0', '1', '1', '0',
    '0', '0', '1', '1'
  ],
  [
    '0', '0', '0', '1',
    '1', '1', '1', '0',
    '0', '1', '0', '0'
  ]
];

console.log(theArrayINeedToMeasureGammaFor);


const thisManyOnesPerBit = theArrayINeedToMeasureGammaFor.forEach((theArrayINeedToMeasureGammaFor) => { 
    let onesArr = [];
    const allTheOnes = theArrayINeedToMeasureGammaFor.filter(x => x == 1);

    const onesArrMaker = allTheOnes.map(x => {
      onesArr.push(1);
      return onesArr;
    })
      
    const lengthOfOnesArr = onesArrMaker.reduce((sum, x) => {
      return sum + onesArr.length;
    })

  return lengthOfOnesArr;
  })




// const rawPowerReading = theArrayINeedTioMeasureGammaFor).map( onesArr => {
//   let gamma = [];
//   let epsilon = [];

//   let gammaReader = theArrayINeedTioMeasureGammaFor).map((onesArr) => {
//     onesArr.length > halfReadingLength ? gamma.push('1') : gamma.push('0');
//     return gamma;
//   })

//   let epsilonReader = theArrayINeedTioMeasureGammaFor).map((onesArr) => { 
//     onesArr.length < halfReadingLength ? epsilon.push('1') : epsilon.push('0');
//     return epsilon;
//   })

//   console.log(epsilon);
  
// })

// // const rawPowerReading = theArrayINeedTioMeasureGammaFor).map( onesArr => {
// // const powerReading = (theArrayINeedTioMeasureGammaFor), onesArr) => {
// //   let gamma = [];
// //   let epsilon = [];



// // }

// // console.log(powerReading(theArrayINeedTioMeasureGammaFor)[0]));
