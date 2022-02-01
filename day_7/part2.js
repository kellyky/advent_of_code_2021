// const fs = require("fs");

// const input = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));

// Sample input
const input = [16,1,2,0,4,2,7,1,2,14];

const median = arr => {
  const length = arr.length;
  arr.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[(length - 1) / 2];
}

// PART ONE -- Used Median
const horizontalPosition = median(input);
const fuelPart1 = input.map(x => Math.abs(x - horizontalPosition));

/* --------------- PART 2 ----------------------------------------------------------------------------
 *
 * I have TWO problems to solve here, I think:
 * (1) Optimal distance
 * (2) Get the sum for fuel 
 *      NEW pattern for fuel:
 *      - 1 step: 1 fuel
 *      - 2 step: 2 fuel + 1 step
 *      - 3 step: 3 fuel + 2 step
 *      - n step: n fuel + (n-1) step 

/* ------------- Let's try Problem 2 first ----------------- */

// Just gest fuel count alone based on steps input - e.g. 2 steps returns 3 fuel (i.e. 2 + 1 fuel)
function fuelz(step) {
  let fuel = 0;
  while (step > 0) {
    fuel += step;
    step--;
  }
  return fuel;
}

