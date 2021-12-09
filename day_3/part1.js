const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3


const powerSlice = (readings, index) => {
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  return column;
}

const eachPowerSlice = [powerSlice(readings, 0), powerSlice(readings, 1), powerSlice(readings, 2), powerSlice(readings, 3), powerSlice(readings, 4)]
// console.log(eachPowerSlice);


const readingTheOnes = eachPowerSlice.forEach((eachPowerSlice => { 
    let onesArr = [];
    const allTheOnes = eachPowerSlice.filter(x => x == 1);

    const onesArrMaker = allTheOnes.map(x => {
      onesArr.push(1);
      return onesArr;
    })
      
    const lengthOfOnesArr = onesArrMaker.reduce((sum, x) => {
      return sum + onesArr.length;
    })
  return onesArr;
  })
)

const readingTheZeros = eachPowerSlice.forEach((eachPowerSlice => {
    let zeroArr = [];

    const allTheZeros = eachPowerSlice.filter(y => y == 0);

    const zerosArrMaker = allTheZeros.map(y => {
      zeroArr.push(0);
      return zeroArr;
    })

    const lengthOfZerosArr = zerosArrMaker.reduce((sum, y) => {
      return sum + zeroArr.length;
    })
  return zeroArr;
  })
)
      
const powerReading = eachPowerSlice.map((eachPowerSlice, onesArr, zeroArr) => {
  let gamma = [];
  let epsilon = [];

    if (onesArr.length > zeroArr.length) {
      gamma.push(1);
      epsilon.push(0);
    } else {
      gamma.push(0);
      epsilon.push(1);
    }

    console.log(gamma);
    console.log(epsilon);
})

