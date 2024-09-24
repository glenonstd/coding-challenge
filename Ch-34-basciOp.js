// function basicOp(operation, value1, value2) {
//   const ops = {
//     "+": (value1, value2) => value1 + value2,
//     "-": (value1, value2) => value1 - value2,
//     "*": (value1, value2) => value1 * value2,
//     "/": (value1, value2) => value1 / value2,
//   };

//   return ops[operation] ? ops[operation](value1, value2) : "invalid";
// }

// function basicOp(operation, value1, value2) {
//   return eval(`${value1} ${operation} ${value2}`);
// }

const basicOp = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`);

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
