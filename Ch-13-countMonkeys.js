// function monkeyCount(n) {
//   let res = [];

//   for (let i = 1; i <= n; i++) {
//     res.push(i);
//   }

//   return res;
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);

console.log(monkeyCount(10));
