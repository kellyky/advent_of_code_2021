// const fs = require("fs");

// const input = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));


/* --------------- PART 2 ----------------------------------------------------------------------------
 *
 * PROBLEMS to solve here: 
 *
 * (1)  Figure out horizontal position - if different. Part 1 used median
 * (x)  Find difference of distance between input and horizontal position - in Part 1, distance equaled the fuel spent
 * (x)  Calculate fuel spent (in each step)
 * (x)  Add up the fuel spent from all setps
 *
 *      NEW pattern for fuel:
 *      - 1 step: 1 fuel
 *      - 2 step: 2 fuel + 1 step
 *      - 3 step: 3 fuel + 2 step
 *      - n step: n fuel + (n-1) step   */




// Starting "horizontal position"
const startHere = [16,1,2,0,4,2,7,1,2,14]; // sample input
console.log("startHere - the array of starting horizontal positions")
console.log(startHere);

// Hard coding steps for now
const endPosition = 2;

// Basing the distance traversed based on startHere and endPosition
const stepsTaken = startHere.map(s => Math.abs(s - endPosition));
console.log("\nstepsTaken - the number of steps needed to get to the endPosition");
console.log(stepsTaken);

// Now that we have an array of the steps taken for each position, we can use each of those steps to determine the fuel required for each step
const fuelPerInt = step => {
  let fuel = 0;
  while (step > 0) {
    fuel += step;
    step--;
  }
  return fuel;
}

const arrFuelTotal = stepsTaken.map( el => {
  return fuelPerInt(el);
})

console.log("\narrFuelTotal - this array lists the fuel needed to get to the `endPosition` provided");
console.log(arrFuelTotal);

const totalFuelSpent = arrFuelTotal.reduce(( x, y ) => x + y);
console.log("\ntotalFuelSpent - sums up the elements in arrFuelTotal");
console.log(totalFuelSpent);

