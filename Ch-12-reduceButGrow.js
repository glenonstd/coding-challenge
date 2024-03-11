// function grow(x) {
//   let res = 1;

//   // for (let i of x) {
//   //   res *= i;
//   // }

//   for (let i = 0; i < x.length; i++) {
//     res *= x[i];
//   }

//   return res;
// }

const grow = (x) => x.reduce((acc, val) => acc * val);

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
