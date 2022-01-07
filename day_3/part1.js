const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

const listLength = readings.length;
const wordLength = readings[0].length;
const halfReadingLength = readings.length / 2;

function makeArraySlices (array) {
  let outerArr = [];
  for (let i in array) {
    for (let el of array) {
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

const thisManyOnesPerBit = bits.map((column => { 
  return column.filter(x => x == 1);
}))

const gamma = thisManyOnesPerBit.map( countedOnes => {
  return countedOnes.length > halfReadingLength ? '1' : '0';
})

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const interpretReading = el => parseInt(el.join(''), 2);

const powerCalculator = (gam, eps) => interpretReading(gam) * interpretReading(eps);

console.log(powerCalculator(gamma, epsilon))
