const fs = require("fs");

const readings = fs
  .readFileSync("sampleInput.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => x)

// Day 3: https://adventofcode.com/2021/day/3


const sum = (x, y) => x + y;
const arraySum = array => array.reduce(sum);

const powerSlice = (readings, index) => {
  let column = [];
  for (let i in readings) {
    const entry = readings[i];
    column.push(entry[index]);
  }
  return column;
}



const eachPowerSlice = [powerSlice(readings, 0), powerSlice(readings, 1), powerSlice(readings, 2), powerSlice(readings, 3), powerSlice(readings, 4)]
console.log(eachPowerSlice);


const orchestra = eachPowerSlice
  .forEach((violin => { 
    // console.log(violin);

    let onesArr = [];
    let allTheOnes = violin
      .filter(x => x == 1)
      .map((x) => {
        onesArr.push(1);
        return onesArr;
      }).reduce((sum, x) => {
        return sum + onesArr.length;
      })
    console.log(allTheOnes);

    let zeroArr = [];
    let allZeros = violin
      .filter(y => y == 0)
      .map((y) => {
      zeroArr.push(0);
      return zeroArr;
    }).reduce((sum, y) => {
      return sum + zeroArr.length;
    })
    console.log(allZeros);

    let gamma = [];
    let epsilon = [];

    if (onesArr.length > zeroArr.length) {
      gamma.push(1);
      epsilon.push(0);
      // console.log("gammmmmmaaa " + gamma);
    } else {
      gamma.push(0);
      epsilon.push(1);
      // console.log("oooooo 0 EPSILON" + epsilon);
    }

    console.log(gamma);
    console.log(epsilon);




    

//     const allTheZeros = violin.filter(y => y == 0);
//     console.log(`${allTheOnes} | ${allTheZeros}`);


//     let gamma = 0;
//     let epsilon = 0;

//     const gammaReading = violin => {
//       allTheOnes > allTheZeros 
//       ? gamma += 1 
//       : epsilon += 1;
//       return gamma; 
//     }
//     console.log(gamma);

//     const powerReading = violin => {
//       allTheOnes > allTheZeros 
//       ? gamma += 1 
//       : epsilon += 1;
//       return epsilon;
//     }
//     console.log(gamma);


    

//     let onesCount = allTheOnes.reduce(function (ones, el) {
//       el in ones ? ones[el]++ : ones[el] = 1;
//       console.log(ones);
//       return ones
//     }, {})

//     let zeroCount = allTheZeros.reduce(function (zeros, el) {
//       el in zeros ? zeros[el]++ : zeros[el] = 0;
//       console.log(zeros);
//       return zeros
//     }, {})

    // let gamma = 0;
//     let powerReading = violin.map 
//     onesCount > zeroCount ? gamma = 1 : epsilon = 1;


    // let gamma = [];
    // const powerReadingGamma = (allTheOnes, allTheZeros) => {
    //   allTheOnes > allTheZeros ? gamma.push('1') : gamma.push('0');
    //   // return powerReadingGamma;
    // }

    // let epsilon = 0;
    // const powerReadingEpsilon = (allTheOnes, allTheZeros) => {
    //   allTheOnes < allTheZeros ? epsilon += 1 : epsilon = 0;
    // }

    // console.log(gamma);
    
  }))
