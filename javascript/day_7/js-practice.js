function fuelSpent(step) {
  let fuel = [];

  while (step > 0){
    fuel.push(step);
    step--;
  }
  return fuel;
}

console.log(fuelSpent(1));
console.log(fuelSpent(2));
console.log(fuelSpent(3));

const fuelz = step => {
// function fuelz(step) {
  let fuel = 0;
  while (step > 0) {
    fuel += step;
    step--;
  }
  return fuel;
}

// What does this last function actually do?
// It takes a single parameter, 'step' which is an integer
// For that integer, it will determine the sum of n + (n-1) + (n - 2) + (n - 3) + ... + 1
// What this does NOT do: it does not cycle through an array; it takes only a single integer

console.log(fuelz(4));
console.log(fuelz(3));
console.log(fuelz(2));
