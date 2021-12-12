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

// What does it do? 
//    Loops through each element of readings
//    Filters and keeps elements whose bit starts with 1
//    It cycles through Once and grabs the correct entries
const someFunction = readings.filter( arrElement => {
  return arrElement[0] ==1;
})

console.log(someFunction);




// const bitColumnSlicer = (readings, index) => {
//   let column = [];
//   for (let i in readings) {
//     const entry = readings[i];
//     column.push(entry[index]);
//   }
//   console.log(column);
//   return column;
// }























// The very end is easy :-) 
// const lifeSupportRating = (oxygenGeneratorRating, carbonDioxideScrubber) => oxygenGeneratorRating * carbonDioxideScrubber;
// console.log(lifeSupportRating(oxygenGeneratorRating, carbonDioxideScrubber));


