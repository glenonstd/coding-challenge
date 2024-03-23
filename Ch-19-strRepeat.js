// function repeatStr(n, s) {
//   // let result = "";

//   // for (let i = 0; i < n; i++) {
//   //   result += s;
//   // }

//   // return result;

//   // return s.repeat(n);

//   return Array(n).fill(s).join("");
// }

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));
