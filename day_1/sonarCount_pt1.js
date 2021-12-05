// Part 1: https://adventofcode.com/2021/day/1

const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

const sonarIncreaseCount = (input) => {
  let counter = 0;

  for (let i = 0; i < input.length; i++) {
    input[i] < input[i + 1] ? counter ++ : counter += 0;
  }
  
  return counter;
};

console.log(sonarIncreaseCount(input));
