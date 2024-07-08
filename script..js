// calculate factorial n numbers
let num = 7;

function calculateFactorial(n) {
  if (n < 0) {
    console.log("You Entered Invalid  Negative number");
  }
  let factorialnum = 1;
  for (n; n > 1; n--) {
    console.log(n);
    factorialnum *= n;
  }
  return factorialnum;
}

console.log(calculateFactorial(5));



// Anonymus Fuction with Retrun array of double number
let arr = [3, 5, 7, 4, 8];

let doubleArray = (arr) => {
  let arrdouble = [];

  for (let i = 0; i < arr.length; i++) {
    arrdouble.push(arr[i] * 2);
  }
  return arrdouble;
};

console.log(`Array Of  Each Double = ${doubleArray(arr)}`);


//  FUCTION  ONLY one number as a parameter

let factorial =nums=>{
    let factorial_num=1
    for(nums;nums>1;nums--){
       factorial_num*=nums
    }
    return factorial_num
}
console.log(factorial (5));


