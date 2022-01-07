// Code I can use to 'import' the daily setOfDirections file

const fs = require("fs");

const directions = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))


// Day 2, Part 1 https://adventofcode.com/2021/day/2

function followTheseDirections (setOfDirections) {
  let depth = 0;
  let horizontal = 0;

  for (let eachStep in setOfDirections) {
    const steps = setOfDirections[eachStep];
    const arrayifiedStep = steps.split(' ', setOfDirections[eachStep].length);
    const goThisWay = arrayifiedStep[0];
    const distance = parseInt(setOfDirections[eachStep].split(' ', setOfDirections[eachStep].length)[1]);


    goThisWay == 'forward' ? horizontal += distance
    : goThisWay == 'down' ? depth += distance
    : depth -= distance;

  }
  return depth * horizontal;
}

const theDiveEndsHere = followTheseDirections(directions);
console.log(theDiveEndsHere);
