// Code I can use to 'import' the daily instructions file

const fs = require("fs");

const instructions = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))


// Day 2, Part 1 https://adventofcode.com/2021/day/2

function dive (instructions) {
  let depth = 0;
  let horizontal = 0;

  for (let j = 0; j < instructions.length; j++) {
    let steps = instructions[j];
    let stepArr = steps.split(' ', instructions[j].length);
    let distance = parseInt(stepArr[1]);

    stepArr[0] == 'forward' ? horizontal += distance
    : stepArr[0] == 'down' ? depth += distance
    : depth -= distance;

  }
  return depth * horizontal;
}

console.log(dive(instructions));
