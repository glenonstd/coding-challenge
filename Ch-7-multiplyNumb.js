// function multiply(number) {
//   let result = number * Math.pow(5, Math.abs(number).toString().length);

//   return result;
// }

const multiply = (num) => num * Math.pow(5, Math.abs(num).toString().length);

console.log(multiply(3));
console.log(multiply(10));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-3));
