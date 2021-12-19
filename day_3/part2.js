const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3

const sum = (x, y) => x + y;
const totalReadingsCount = readings.length;
const wordLength = readings[0].length;
const arraySum = array => array.reduce(sum);


const allTheBitSlices = array => {
  let outerArr = [];
  for (let i in array) {
    for (let el of array) {
      outerArr.push(el[i]);
    }
  }
  const flattened = outerArr.flat();
  let newestArr = [];

  // (x, y) are slice coords
  for (let x = 0; x < (totalReadingsCount * wordLength); x += totalReadingsCount){
    let y = x + totalReadingsCount;
    newestArr.push(flattened.slice(x, y));
  }
  return newestArr;
}

const bitIndexReadings = allTheBitSlices(readings);

const massiveArrOfOnes = bitIndexReadings.map((column => { 
  return column.filter(x => x == 1);
}))

const gamma = massiveArrOfOnes.map( countedOnes => {
  return countedOnes.length > totalReadingsCount/2 ? '1' : '0';
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

// console.log(powerReading(gammaToDecimal, epsilonToDecimal));

// life support rating = oxygen generator rating * CO2 scrubber rating
// oxigen rating => most common
// CO2 scrubber => least common

let oxygenRating = [];
let co2Scrubber = [];

// counts qty of 1s in each bit of specified array
const bitOneCount = arr => {
  return bitIndexReadings.map(el => {
    const ones = el.filter(n => n == 1);
    return ones.length;
  })
}

// runs bitOneCount on readings
const readingsBitsOneCount = bitOneCount(readings);
console.log(readingsBitsOneCount);


// evaluates whether 
const beaker = (arr1, arr2)) => {
  let eval = [];
  for (let el of arr1){
    if (el >= totalReadingsCount / 2) {
      readings.filter(x => {
        if (el[x] == '1') return 

      }
      eval.push("ones");
      // code to keep the elements in readings that have 1 in respective position
    } else {
      eval.push("zeros");
      // code to keep elements in readings that have 0 in respective position
    }
  }
  return eval;
}

console.log(beaker(readingsBitsOneCount, readings));


// const newArr = readings.filter(element => {
//   if (beaker (readingsBitsOneCount, readings) 


// }



// const placeholderName = arr = {
//   const 
//   for (let element in arr){
//     arr.filter(el => {

//       return el >= totalReadingsCount / 2;
      

//     })

//   }
// }

// console.log(placeholderName(readings));
