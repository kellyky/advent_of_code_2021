// const fs = require("fs");

// const starterPopulation = fs
//   .readFileSync("input.txt", { encoding: "utf-8" })
//   .split(",")
//   .filter((x) => x)
//   .map((x) => parseInt(x));


// Sample input 
let starterPopulation = [3,4,3,1,2]; // once test info works, comment this out and uncomment the above

const population = arr => {
  for (let day = 0; day < 18; day++){  // change days to 80 later
    console.log(`New Day: ${day}`);
    arr = arr.map(x => {
      if (x === 0) {
        const createThisManyFish = arr.filter(x => x === 0).length;
        const tempNewFish = Array(createThisManyFish).fill(8);
        console.log(tempNewFish);
        return x += 6;
      } 
      return x - 1;
    });
    console.log(arr); // temp; to see if the values are updating correctly
  }
  return arr.length;
}

console.log(population(starterPopulation));


