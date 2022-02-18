const fs = require("fs");

const readings = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

const listLength = readings.length;
const wordLength = readings[0].length;

function  makeArraySlices (allTheReadings) {
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

const onesInBit = bits.map((column => column.filter(x => x == 1)));

const gamma = onesInBit.map( bitOnes => {
  return bitOnes.length > readings.length / 2 ? '1' : '0';
})

const epsilon = gamma.map( element => {
  return element == '1' ? '0' : '1';
})

const interpretReading = el => parseInt(el.join(''), 2);
const powerReading = interpretReading(gamma) * interpretReading(epsilon);

function getCount (lines) {
  const zeros = Array(listLength).fill(0);
  const ones = Array(listLength).fill(0);

  for (const line of lines){
    const bits = [...line];
    bits.forEach((bit, index) => bit == "0" ? zeros[index]++ : ones[index]++ );
  }
  return { zeros, ones };
}

function getOxygenRating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let mostCommonBit = "1";
  if (zeros[index] > ones[index]) { mostCommonBit = "0"; } 

  const filtered = lines.filter((line) => line[index] == mostCommonBit);

  if (filtered.length == 1){ return filtered[0]; }
  return getOxygenRating(filtered, index + 1);
}

function getCO2ScrubberRating(lines, index = 0) {
  const { zeros, ones } = getCount(lines);
  let leastCommonBit = "0";
  if (ones[index] < zeros[index]) { leastCommonBit = "1"; }

  const filtered = lines.filter((line) => line[index] == leastCommonBit);

  if (filtered.length == 1){ return filtered[0]; }
  return getCO2ScrubberRating(filtered, index+1);
}


const O2Rating = parseInt(getOxygenRating(readings), 2);
const CO2Rating = parseInt(getCO2ScrubberRating(readings), 2);

const lifeSupport = O2Rating * CO2Rating;
console.log(lifeSupport);

