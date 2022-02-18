// Starting "horizontal position"
const startHere = [16,1,2,0,4,2,7,1,2,14];
console.log(startHere);

// Hard coding steps for now
const endPosition = 5;

// Basing the distance traversed based on startHere and endPosition
const stepsTaken = startHere.map(s => Math.abs(s - endPosition));
console.log(stepsTaken);

// Now that we have an array of the steps taken for each position, we can use each of those steps to determine the fuel required for each step

  
const fuelPerInt = step => {
  let fuel = 0;
  while (step > 0) {
    fuel += step;
    step--;
  }
  return fuel;
}

const arrFuelTotal = stepsTaken.map( el => {
  return fuelPerInt(el);
})

console.log(arrFuelTotal);

const totalFuelSpent = arrFuelTotal.reduce(( x, y ) => x + y);
console.log(totalFuelSpent);
