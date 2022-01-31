const fs = require("fs");


const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));

// Max and Min probably won't be used irl but we'll see. I'm using them to hone in on how to figure out valid horizontal horizontalPositions to consider
let inputMax = Math.max(...input);
console.log("Biggest number from input");
console.log(inputMax);
console.log("\n");


let inputMin = Math.min(...input);
console.log("Smallest number from input");
console.log(inputMin);
console.log("\n");


// Takes the average of values in input
// I don't think this wll be used but we'll see
let mean = arr => (arr.reduce((x,y) => x + y)) / arr.length;
console.log(mean(input));

// Median of input. Thinking it'll be median or mode we'll need... 
let median = arr => {
  arr.sort((a, b) => a - b);

  if (arr.length % 2 === 0) {
    return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
  }
  return arr[(arr.length - 1) / 2];
}

console.log(median(input));


// let horizontalPosition = (inputMax + inputMin) / 2
let horizontalPosition = median(input);
let tryingTheseStartingPoints = input;

console.log("Horizontal Position: This is the value we're using to determine fuel cost");
console.log(horizontalPosition);
console.log("\n");

// FUEL used; creates array from input and horizontal horizontalPosition
let fuel = input.map(x => Math.abs(x - horizontalPosition));
console.log(`Individual fuel cost: ${fuel}\n`);

// Things I still don't know
// What are the valid horizontalPositions? How do I know when to stop trying new numbers? Possibly within a certain range of the highest & lowest? 










// Total fuel spent; should be the final step for part 1
let totalFuelSpent = fuel.reduce(( x, y ) => x + y);
console.log(totalFuelSpent);
