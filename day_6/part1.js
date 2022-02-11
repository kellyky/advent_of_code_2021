// const fs = require("fs");

// const starterPopulation = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));

let starterPopulation = [3,4,3,1,2]; 

const population = arr => {

  // looping the days
  for (let day = 0; day < 80; day++){  
    const createThisManyFish = arr.filter(x => x === 0).length;
    // console.log(`New Day starts: ${day}`); // temp just to track days

    // Ticks the counter down each day (or re-sets it to 6 if it's at 0)
    arr = arr.map(x => {      
      if (x === 0) {
        return x += 6;
      } 
      return x - 1;
    });
    
    const tempNewFish = Array(createThisManyFish).fill(8);
  
    arr = arr.concat(tempNewFish);
    
    // console.log(arr)

  }
  return arr.length;
}

console.log(population(starterPopulation));
