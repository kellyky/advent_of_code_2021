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

function getSonarIncreaseCount (arr) {
  let counter = 0;
  for (let i in arr) {
    let sumA = arr[i] + arr[i + 1] + arr[i + 2];
    let sumB = arr[i + 1] + arr[i + 2] + arr[i + 3];
    if (sumB > sumA) counter++;
  }
  return counter;
}

const sonarIncreasecount = getSonarIncreaseCount(input);
console.log(sonarIncreasecount);

