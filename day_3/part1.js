const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const length = (readings) => readings.length;
const arraySum = array => array.reduce(sum);
const indices = [0, 1, 2, 3, 4];

const columnGetter = (readings, ...index) => {
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  return column;
}

const column0 = columnGetter(readings, 0);
const column1 = columnGetter(readings, 1);
const column2 = columnGetter(readings, 2);
const column3 = columnGetter(readings, 3);
const column4 = columnGetter(readings, 4);


const allColumns = [columnGetter(readings, 0), columnGetter(readings, 1), columnGetter(readings, 2), columnGetter(readings, 3), columnGetter(readings, 4)]

allColumns.forEach(col => console.log(col));
