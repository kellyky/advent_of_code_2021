// Code I can use to 'import' the daily input file

const fs = require("fs");

// const input = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => x)
//   .map((x) => parseInt(x));

const input = [16,1,2,0,4,2,7,1,2,14];

// for now, set arbitrarily; I need to find a pattern out here to understand this
let horizontalPos = 2;

// (for now: creating array the length of input to grab difference)
// I think this won't serve a purpose... temporary...
let horiArr = Array(input.length).fill(horizontalPos);

// Pringing the things
console.log("\n");
console.log(input);
console.log("\n");
console.log(horizontalPos);
console.log(horiArr);
console.log("\n");


// FUEL; iterates through array, obtains abs value of difference between 
let fuelCalc = input.map(x => Math.abs(x - horizontalPos));
console.log(fuelCalc);


// Things I think I know
// We'll need a reduce function to grab sum of all the fuel costs 
// We'll need a way to evaluate which position has the smallest fuel cost

// Things I don't know
// Not totally sure I get what the aim is here; I'm not picturing it
// What are the valid positions? How do I know when to stop trying new numbers? 
