// Part 2 https://adventofcode.com/2021/day/1#part2
const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter(x => x)
  .map((x) => parseInt(x));


// Day1 Part2:
function getSonarIncreaseCount (arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++){
    let firstSum = arr[i] + arr[i + 1] + arr[i + 2];
    let secondSum = arr[i + 1] + arr[i + 2] + arr[i + 3];

    if (secondSum > firstSum) counter++;

  }
  return counter;
}

const sonarIncreasecount = getSonarIncreaseCount(input);
console.log(sonarIncreasecount);

