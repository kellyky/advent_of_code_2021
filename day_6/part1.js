// Code I can use to 'import' the daily input file

// const fs = require("fs");

// const internalTimerOfEachFish = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));


/* --------- THINGS WE KNOW ------------------
 * Each entry is the internal timer of each fish
 *    - Each day, the timer ticks down by 1
 *    - When the timer reaches 0, 2 things happen:
 *        - (1) The PARENT fish timer resets to 6
 *        - (2) The CHILD fish has a timer of 8
 *            - (a) The CHILD fish does not start counting down until the following day
 *

 -------------- HOW can I BREAK THIS DOWN --------------
 Well, which problems do I need to solve?
 (1) Each "day" the internalTimerOfEachFish ticks down 
 (2) When any individual fish timers hit `0`:
    (a) a new fish timer is born (i.e. arr.push(8))
    (b) the fish with timer `0` gets reset to 6

*/

// Sample input 
const internalTimerOfEachFish = [3,4,3,1,2];

const timerTicker = arr => {
  return arr.map( x => x - 1);
}

console.log (timerTicker(internalTimerOfEachFish));


