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
  let counter = 0; 

  for (let i = 0; i < input.length; i++) {
    let window = 0;

    while (window < 1){
      let sumA = input[i] + input[i + 1] + input[i + 2];
      let sumB = input[i + 1] + input[i + 2] + input[i + 3];

      sumB > sumA ? counter++ : counter += 0;
      window++;
    }
  }
  console.log(counter);

};

console.log(sonarIncreaseCount(input));
