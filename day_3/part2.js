const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3

const sum = (x, y) => x + y;
const listLength = readings.length;
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

// life support rating = oxygen generator rating * CO2 scrubber rating
// oxigen rating => most common
// CO2 scrubber => least common

const bergamot = readings.map(reading => {
  return bitIndexReadings.map(el => {
    const ones = el.filter(n => n == 1);
    return ones.length;
  })
})


// goes through each element of bitIndexReadings
const lavender = bitIndexReadings.map( el => {
  
  

  // if element of bitI.. has more 1s (or equal):
  //    filter/keep those elements from readings
  //if element of bitI.. has more 0sm 
  //    filter/keep those elements from readings
})



                          
console.log("bergamot creates array of ones in bit; returns length of that array");
console.log(bergamot);










console.log(listLength/2);

const whichBits = bergamot => {
  if (bergamot >= listLength / 2) return "keep bit with 1s"
  else return "keep bits with 0s";
}

const geranium = readings.filter(whichBits);




