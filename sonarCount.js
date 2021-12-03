const sonarIncreaseCount = (input) => {
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]){
      counter++;
    }
  }
  return counter;
};
