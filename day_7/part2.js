const fs = require("fs");

// Starting "horizontal position"
const startingPlaces = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));


const getMeanOfArray = arr => {
  let sum = arr.reduce(( x, y ) => x + y);
  return sum / arr.length;
}

const endPosition = Math.floor(getMeanOfArray(startingPlaces));

// eachCrabWalked is the distance between startingPlaces and endPosition
const eachCrabWalked = startingPlaces.map(x => Math.abs(x - endPosition));

// How much fuel used, in each element of the array
const fuelPerCrab = step => {
  let fuel = 0;
  while (step > 0) {
    fuel += step;
    step--;
  }
  return fuel;
}

const arrFuelTotal = eachCrabWalked.map( el => fuelPerCrab(el));

const totalFuelSpent = arrFuelTotal.reduce(( x, y ) => x + y);
console.log(totalFuelSpent);

