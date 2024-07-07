// calculate factorial n numbers

let num = 7;

function factorial_num(n) {
  if (n < 0) {
    console.log("You Entered Invalid  Negative number");
  }
  let factorialnum = 1;
  for (n; n > 1; n--) {
    console.log(n);
    factorialnum *= n;
  }
  return factorialnum
}

console.log(factorial_num(5))