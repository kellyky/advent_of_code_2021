// Part 1: https://adventofcode.com/2021/day/1

const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter(x => x)
  .map((x) => parseInt(x));

function getSonarIncreaseCount (arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) counter++;
  }
  return counter;
};

const sonarIncreaseCount = getSonarIncreaseCount(input);
console.log(sonarIncreaseCount);
