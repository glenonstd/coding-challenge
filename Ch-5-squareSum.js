// function squareSum(numbers) {
//   let res = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     res += numbers[i] * numbers[i];
//   }
//   return res;
// }

// function squareSum(numbers) {
//   return numbers
//     .map((num) => Math.pow(num, 2))
//     .reduce((acc, val) => acc + val, 0);
// }

const squareSum = (numbers) => numbers.reduce((acc, val) => acc + val * val, 0);

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
