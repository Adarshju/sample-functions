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

let factorial = (nums) => {
  let factorial_num = 1;
  for (nums; nums > 1; nums--) {
    factorial_num *= nums;
  }
  return factorial_num;
};
console.log(factorial(5));

// callback function as a parameter and return new array

function processArray(arr, callback) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.push(callback(arr[i]));
  }
  return new_arr;
}

let arr_num = [2, 4, 6, 9, 2, 5];

let processArray_res = processArray(arr_num, function (num) {
  return num * 2;
});
console.log(processArray_res)
