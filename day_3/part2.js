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

// console.log(readings);

const firstIndex = readings.map( entry => {
  for (let i in entry) {
    return entry[i];
  }
})

console.log(firstIndex);


// I think I need to add code back in to evalutate qty of 1s



// Filters out elements starting with 1
const oneStartingElements = readings.filter( el => {
  return el[0] == 1;
})
console.log("oneStartingElements");
console.log(oneStartingElements);

const thisManyOneStartingElements = oneStartingElements.count;
console.log(thisManyOneStartingElements);

// Filters out elements starting with 0
const zeroStartingElements = readings.filter( el => {
  return el[0] == 0;
})

console.log("zeroStartingElements");
console.log(zeroStartingElements);

const thisManyZeroStartingElements = zeroStartingElements.length;
console.log(thisManyZeroStartingElements);
















// The very end is easy :-) 
// const lifeSupportRating = (oxygenGeneratorRating, carbonDioxideScrubber) => oxygenGeneratorRating * carbonDioxideScrubber;
// console.log(lifeSupportRating(oxygenGeneratorRating, carbonDioxideScrubber));


