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



const allColumns = [powerSlice(readings, 0), powerSlice(readings, 1), powerSlice(readings, 2), powerSlice(readings, 3), powerSlice(readings, 4)]
console.log(allColumns);

const orchestra = allColumns
  .map((violin => { 
    const soloists = violin.filter(x => x == 1);
    const audience = violin.filter(y => y == 0);
    console.log(soloists.length+ ' ' + audience.length);



    let onesCount = violin.reduce(function (count, cello) {
      cello in count ? count[cello]++ : count[cello] = 1;
      console.log(count);
      return count
    }, {})

  }))






  // let gamma = placeholder => {
  // const onesInPowerSlice = violin.filter(x => x == 1);
  // onesInPowerSlice.length > readings.length
  //   ? gamma += 1
  //   : gamma += 0;
    
  //   return gamma;

  // }


  // let epsilon = [];
  // const zeroesInPowerSlice = violin.filter(x => x == 0);
  // zeroesInPowerSlice.length > readings.length
  //   ? epsilon.push(0)
  //   : epsilon.push(1);

  // console.log(violin)}
  // ))

    

// console.log(allColumns);


// const readOnes = allColumns.forEach(col => {
//   col.filter(x => x == 1);
// })
// const powerReader = allColumns.forEach(col => {
//   const onesInSlice = col.filter(x => x == 1);
// })

// const gamma = (onesInPowerSlice => {
//       onesInPowerSlice.length > rereadings.length
//       ? gamma.push(1)
//       : gamma.push(0);
//       return gamma;
//     })

//     const epsilon = (onesInPowerSlice => {
//       onesInPowerSlice.length > zeroesInPowerSlice
//       ? epsilon.push(0)
//       : epsilon.push(1);
//       return epsilon;
//     })

