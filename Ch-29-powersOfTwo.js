// function powersOfTwo(n) {
//   // let result = [];
//   // for (let i = 0; i <= n; i++) {
//   //   // result.push(Math.pow(2, i));
//   //   result.push(2 ** i);
//   // }
//   // return result;
//   // return Array.from({ length: n + 1 }, (_, i) => 2 ** i);
//   // if (n === 0) return [1];
//   // const result = powersOfTwo(n - 1);
//   // const current = 2 ** n;
//   // result.push(current);
//   // return result;
// }

const powersOfTwo = (n) => Array.from({ length: n + 1 }, (_, i) => 2 ** i);

console.log(powersOfTwo(0)); //[1]
console.log(powersOfTwo(1)); //[1, 2]
console.log(powersOfTwo(4)); //[1, 2, 4, 8, 16]
