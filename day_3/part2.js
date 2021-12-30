const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)


const sum = (num1, num2) => num1 + num2;
const listLength = readings.length;
const wordLength = readings[0].length;
const arraySum = array => array.reduce(sum);
const binaryStringToDecimal = binaryString => parseInt((binaryString.join('')), 2);


const allTheBitSlices = array => {
  let outerArr = [];
  for (let index in array) {
    for (let element of array) {
      outerArr.push(element[index]);
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

const bitIndexReadings = allTheBitSlices(readings);

const massiveArrOfOnes = bitIndexReadings.map((column => { 
  return column.filter(x => x == 1);
}))

const gamma = massiveArrOfOnes.map( countedOnes => {
  return countedOnes.length > listLength/2 ? '1' : '0';
})

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const powerReading = binaryStringToDecimal(gamma) * binaryStringToDecimal(epsilon);
console.log("Power Reading: " + powerReading);

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

const getLifeSupportRating = (oxy, carbon) => {
  return parseInt(oxy, 2) * parseInt(carbon, 2);
}

const lifeSupportRating = getLifeSupportRating(O2Rating, CO2Rating);

console.log("Life Support Rating: " + lifeSupportRating);

