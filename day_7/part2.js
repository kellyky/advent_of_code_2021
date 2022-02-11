const fs = require("fs");

// Starting "horizontal position"
const startingPlaces = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));


const mean = startingPlaces.reduce((x, y) => x + y) / startingPlaces.length;

const endPosition = Math.floor(mean);

const eachCrabWalked = startingPlaces.map(x => Math.abs(x - endPosition));

const fuelBurnedPerCrab = crabStep => {
  let fuelGauge = 0;
  while (crabStep > 0) {
    fuelGauge += crabStep;
    crabStep--;
  }
  return fuelGauge;
}

const arrFuelTotal = eachCrabWalked.map( crabSteps => fuelBurnedPerCrab(crabSteps));

const totalFuelSpent = arrFuelTotal.reduce(( x, y ) => x + y);
console.log(totalFuelSpent);

