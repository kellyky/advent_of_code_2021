// Code I can use to 'import' the daily input file

const fs = require("fs");

const input = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  // .filter((x) => x)
  // .map((x) => parseInt(x));

console.log(typeof input);
console.log(input);

for (let i = 0; i < 15; i++){
  const something = input[i];
  console.log(something);
}

console.log(typeof something);

