// Code I can use to 'import' the daily directions file

const fs = require("fs");

const directions = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))


// Day 2, Part 1 https://adventofcode.com/2021/day/2

function diveToLocation (directions) {
  let depth = 0;
  let horizontal = 0;

  for (let entry in directions) {
    let steps = directions[entry];
    let stepArr = steps.split(' ', directions[entry].length);
    let distance = parseInt(stepArr[1]);

    stepArr[0] == 'forward' ? horizontal += distance
    : stepArr[0] == 'down' ? depth += distance
    : depth -= distance;

  }
  return depth * horizontal;
}

console.log(diveToLocation(directions));
