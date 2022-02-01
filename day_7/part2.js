const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));

// const input = [16,1,2,0,4,2,7,1,2,14];

const median = arr => {
  const length = arr.length;
  arr.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[(length - 1) / 2];
}

// Part 1 used median
const horizontalPosition = median(input);

// console.log(`Median: ${horizontalPosition}`);

// PART 1 -- FUEL used for each move in array
const fuelPart1 = input.map(x => Math.abs(x - horizontalPosition));
// For part 1, we're just using the median for the best distance. Something about the middle of the spectrum being a good starting point aor shot in the dark. 
