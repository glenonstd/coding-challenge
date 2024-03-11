// function maps(x) {
//   let res = [];

//   for (let i = 0; i < x.length; i++) {
//     res.push(x[i] * 2);
//   }

//   return res;
// }

const maps = (x) => x.map((i) => i * 2);

console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));
