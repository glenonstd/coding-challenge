// var summation = function (num) {
//   // let total = 0;

//   // for (let i = 1; i <= num; i++) {
//   //   total += i;
//   // }

//   // return total;

//   // return (num * (num + 1)) / 2;

//   if (num === 1) return 1;

//   return num + summation(num - 1);
// };

// const summation = (num) => (num === 1 ? 1 : num + summation(num - 1));
const summation = (num) => (num * (num + 1)) / 2;

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));
