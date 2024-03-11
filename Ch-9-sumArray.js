// function sumArray(array) {
//   if (!array || array.length < 1) {
//     return 0;
//   }

//   const res = array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, val) => acc + val, 0);

//   return res;
// }

const sumArray = (array) =>
  array && array.length > 1
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, val) => acc + val, 0)
    : 0;

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([0, 1, 6, 10, 10]));
console.log(sumArray([]));
console.log(sumArray([-6, -20, -1, -10, -12]));
console.log(sumArray([-6, 20, -1, 10, -12]));
console.log(sumArray(null));
