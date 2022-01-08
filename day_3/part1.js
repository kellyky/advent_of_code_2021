const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

const listLength = readings.length;
const wordLength = readings[0].length;

function makeArraySlices (allTheReadings) {
  let outerArr = [];
  for (let i in allTheReadings) {
    for (let el of allTheReadings) {
      outerArr.push(el[i]);
    }
  }
  const flattened = outerArr.flat();
  let newestArr = [];

  for (let x = 0; x < (listLength * wordLength); x += listLength){
    let y = x + listLength;

    newestArr.push(flattened.slice(x, y));
  }
  return newestArr;
}

const bits = makeArraySlices(readings);

const onesInBit = bits.map((column =>  column.filter(x => x == 1)));

const gamma = onesInBit.map( bitOnes => {
  return bitOnes.length > readings.length / 2 ? '1' : '0';
})

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const interpretReading = el => parseInt(el.join(''), 2);
const powerReading = interpretReading(gamma) * interpretReading(epsilon);

console.log(powerReading)
