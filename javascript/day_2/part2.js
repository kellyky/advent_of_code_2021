 // Handling the imported directions

const fs = require("fs");

const directions = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 2, Part 2 https://adventofcode.com/2021/day/2#part
function dive (directions) {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

for (let entry in directions){
  const step = directions[entry];
  const stepArr = step.split(' ');
  const directional = stepArr[0];
  const number = parseInt(stepArr[1]);

  if (stepArr[0] == 'down') {
    aim += number;
  } else if (stepArr[0] == 'up') {
    aim -= number;
  } else { 
    horizontal += number; 
    depth = depth + aim * number;
  }
}
return depth * horizontal;
}

console.log(dive(directions));
