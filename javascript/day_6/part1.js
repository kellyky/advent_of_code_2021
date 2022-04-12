const fs = require("fs");

const starterPopulation = fs
  .readFileSync("input.txt", { encoding: "utf-8" })
  .split(",")
  .filter((x) => x)
  .map((x) => parseInt(x));

// let starterPopulation = [3,4,3,1,2]; // sample input

const population = arr => {

  for (let day = 0; day < 80; day++){  
    const createThisManyFish = arr.filter(x => x === 0).length;

    arr.map(x => {      
      if (x === 0) {
        return x += 6;
      } 
      return x - 1;
    });
    
    const tempNewFish = Array(createThisManyFish).fill(8);
    arr = arr.concat(tempNewFish);

  }
  return arr.length;
}

console.log(population(starterPopulation));
