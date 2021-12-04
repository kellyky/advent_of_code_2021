// Part 2 https://adventofcode.com/2021/day/1#part2

// Getting input & turning into array - input is same
// const fs = require("fs");

// const input = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split("\n")
//   .filter((x) => Boolean(x))
//   .map((x) => parseInt(x));


// Day1 Part2:
// Compare sum of 3 nums, with sum of previous 3

const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

const sonarIncreaseCount = (input) => {
  let counter = 0;

    let window = 0;
    let sumA = 0;
    let sumB = 0;
    while (window < 1){
      let sumA = input[window] + input[window + 1] + input[window + 2];
      let sumB = input[window + 1] + input[window + 2] + input[window + 3];

      // temp - just helps me track things
      console.log(window);
      console.log('sumA = ' + sumA);
      console.log('sumB = ' + sumB);
      // checks whether SumB is greater
      if (sumB > sumA) {
        counter++;
        console.log('sumB wins!');
      }
      window++;
    }
  console.log(counter);

};

console.log(sonarIncreaseCount(input));
