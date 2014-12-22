// return the min of two numbers

function min(x, y){
  if(x < y){
    return x;
  } else if(y < x){
    return y;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10