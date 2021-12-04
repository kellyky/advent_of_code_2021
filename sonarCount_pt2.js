// Part 2 https://adventofcode.com/2021/day/1#part2

// Getting input & turning into array - input is same
const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));


// Day1 Part2:
// Compare sum of 3 nums, with sum of previous 3



const sonarIncreaseCount = (input) => {
  // vars to hold the two sums as we go, so we can compare them
  let sumA = 0;
  let sumB = 0;
  let counter = 0;

  // code for comparing sums A and B as we go
  // counter++
  
  return counter;
};

console.log(sonarIncreaseCount(input));
