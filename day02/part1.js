// Code I can use to 'import' the daily input file

const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))


// Day 2, Part 1 https://adventofcode.com/2021/day/2

function dive (input) {
  let depth = 0;
  let horizontal = 0;

  for (let j = 0; j < input.length; j++) {
    let entry = input[j];
    let newEntry = entry.split(' ', input[j].length);
    let num = parseInt(newEntry[1]);

    newEntry[0] == 'forward' ? horizontal += num
    : newEntry[0] == 'down' ? depth += num
    : depth -= num;

  }
  return depth * horizontal;
}

console.log(dive(input));
