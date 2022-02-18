// Practicing countdown

let whatsLeft = 10;

function countdown (time){
  let arr = []; //Array(whatsLeft).fill('X');
  while (time > 0){
    console.log(time);
    arr = Array(time).fill('yeet');
    time--;
  }
  return arr;
}

console.log(countdown(whatsLeft));
