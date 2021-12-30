const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
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

<<<<<<< HEAD
  for (let x = 0; x < (listLength * wordLength); x += listLength){ // coordinates in slice, wasn't sure what to call them
    let y = x + listLength;
=======
  // (x, y) are slice coords
  for (let x = 0; x < (totalReadingsCount * wordLength); x += totalReadingsCount){
    let y = x + totalReadingsCount;
>>>>>>> 0c1a6061b7ec0f9e6a1d497d39c8c43351152abf
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

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const binaryStringToDecimal = binaryString => parseInt((binaryString.join('')), 2);

const powerReading = binaryStringToDecimal(gamma) * binaryStringToDecimal(epsilon);

<<<<<<< HEAD
console.log("\nPower Reading:");
console.log(powerReading);
=======
// console.log(powerReading(gammaToDecimal, epsilonToDecimal));
>>>>>>> 0c1a6061b7ec0f9e6a1d497d39c8c43351152abf

// life support rating = oxygen generator rating * CO2 scrubber rating
// oxygen rating => most common
// CO2 scrubber => least common

<<<<<<< HEAD
const getCount = lines => {
  const zeros = Array(listLength).fill(0);
  const ones = Array(listLength).fill(0);

  for (const line of lines){
    const bits = [...line];
    bits.forEach((bit, index) => {
      if (bit == "0") {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    })
  }
  
  return { zeros, ones };
}

function getOxygenRating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let mostCommonBit = "1";
  if (zeros[index] > ones[index]) {
    mostCommonBit = "0";

  } 

  const filtered = lines.filter((line) => line[index] == mostCommonBit);

  if (filtered.length == 1){
    return filtered[0]
  }
  return getOxygenRating(filtered, index+1);
}

const O2Rating = getOxygenRating(readings);
=======
const bitOneCount = arr => {
  return bitIndexReadings.map(el => {
    const ones = el.filter(n => n == 1);
    return ones.length;
  })
}

const sweetOrange = bitOneCount(readings);

console.log(sweetOrange);

// const whichValGreater = arr => {
//   let eval = [];
//   for (let el of arr) {
//     if (el >= totalReadingsCount / 2) {
//       eval.push("ones");
//     } else {
//       eval.push("zeros");
//     }
//   }
//   return eval
// }



// evaluates whether 
const beaker = (arr1, arr2) => {
  let eval = [];
  for (let el of arr1){
    if (el >= totalReadingsCount / 2) {
      eval.push("yes");
    } else {
      eval.push("not this time");
    }
  }
  return eval;
}

console.log(beaker(sweetOrange, readings));


  
  
>>>>>>> 0c1a6061b7ec0f9e6a1d497d39c8c43351152abf


function getCO2ScrubberRating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let leastCommonBit = "0";
  if (ones[index] < zeros[index]) {
    leastCommonBit = "1";
  }
  const filtered = lines.filter((line) => line[index] == leastCommonBit);
  if (filtered.length == 1){
    return filtered[0];
  }
  return getCO2ScrubberRating(filtered, index+1);
}

const CO2Rating = getCO2ScrubberRating(readings);

const lifeSupportRating = (oxy, carbon) => {
  return parseInt(oxy, 2) * parseInt(carbon, 2);
}

console.log("\nLife Support Rating:");
console.log(lifeSupportRating(O2Rating, CO2Rating));
console.log("\n");



// const tangerine = sweetOrange.map(el => {


//   if (sweetOrange[el] >= (totalReadingsCount / 2)){
//     console.log("more ones");
//   } else {
//     console.log("more zeros");
//   }
// })





///u goes through each element of bitIndexReadings
//const lavender = bitIndexReadings.map( el => {
//  // if element of bitI.. has more 1s (or equal):
//  //    filter/keep those elements from readings
//  //if element of bitI.. has more 0sm 
//  //    filter/keep those elements from readings
//})

