// Code I can use to 'import' the daily input file
//
// Sample input 
let starterPopulation = [3,4,3,1,2];

// const fs = require("fs");

// const starterPopulation = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));


/* --------- THINGS WE KNOW ------------------
 (x) Each "day" the internalTimerOfEachFish ticks down
 (2) When any individual fish timers hit `0`:
    (a) a new fish timer is born (i.e. arr.push(8))
    (x) the fish with timer `0` gets reset to 6
 (x) We get the fish population with arr.length once the days have all run
*/

// let days = 18;

const hatchlings = arr => arr.filter( x => x === 0);

const population = arr => {
  let day = 0;

  while (day <= 18 ){
    console.log(day);

    arr = arr.map(x => {
      if (x === 0) {
        const hatchlingCount = hatchlings(arr).length
        const newHatchlings = Array(hatchlingCount).fill(8);
        console.log(newHatchlings);
        return x += 6;
      } 
      return x - 1;
    });

    // Need to find out how many '0' value elements & push or concat that many elements valued at 8 onto the array


    console.log(arr);
    day++;
  }
  return arr;
}

console.log(population(starterPopulation));


