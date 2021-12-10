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



// This const is the hardcoded result of what my code would output at this point 
// I'm hoping that narrowing the file for now will help me hone in on and solve the issue that is giving me difficulty
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


// I need to figure out how to use this ones count -- 


const rawPowerReading = theArrayINeedToMeasureGammaFor.map( lengthOfOnesArr => {
  let gamma = [];
  let epsilon = [];

  let gammaReader = theArrayINeedToMeasureGammaFor.map((lengthOfOnesArr) => {
    lengthOfOnesArr.length > halfReadingLength ? gamma.push('1') : gamma.push('0');
    return gamma;
  })

  let epsilonReader = theArrayINeedToMeasureGammaFor.map((lengthOfOnesArr) => { 
    lengthOfOnesArr.length < halfReadingLength ? epsilon.push('1') : epsilon.push('0');
    return epsilon;
  })

  console.log(epsilon);
})

// ^ currently logs a 5 x 5 array of '0' 


