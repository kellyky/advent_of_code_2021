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
 (1) Each "day" the internalTimerOfEachFish ticks down
 (2) When any individual fish timers hit `0`:
    (a) a new fish timer is born (i.e. arr.push(8))
    (b) the fish with timer `0` gets reset to 6
 (3) We get the fish population with arr.length once the days have all run
*/

// let days = 18;

const population = arr => {
  let day = 0;

  while (day <= 18 ){
    console.log(day);

    arr = arr.map(x => {
      if (x === 0) {
        console.log("We need new fish & a timer restart!");
      } 
      return x - 1;
    });

    console.log(arr);
    day++;
  }
  return arr;
}

console.log(population(starterPopulation));


