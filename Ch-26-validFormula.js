// function isValid(formula) {
//   // const rules_1 = formula.includes(1) && formula.includes(2);
//   // const rules_2 = formula.includes(3) && formula.includes(4);
//   // const rules_3 = formula.includes(5) === formula.includes(6);
//   // const rules_4 = formula.includes(7) || formula.includes(8);

//   // return !rules_1 && !rules_2 && rules_3 && rules_4;

//   return (
//     !(formula.includes(1) && formula.includes(2)) &&
//     !(formula.includes(3) && formula.includes(4)) &&
//     formula.includes(5) === formula.includes(6) &&
//     (formula.includes(7) || formula.includes(8))
//   );
// }

const isValid = (formula) =>
  !(formula.includes(1) && formula.includes(2)) &&
  !(formula.includes(3) && formula.includes(4)) &&
  formula.includes(5) === formula.includes(6) &&
  (formula.includes(7) || formula.includes(8));

console.log(isValid([1, 3, 7])); // Output: false
console.log(isValid([7, 1, 2, 3])); // Output: false
console.log(isValid([1, 3, 5, 7])); // Output: false
console.log(isValid([1, 5, 6, 7, 3])); // Output: true
console.log(isValid([5, 6, 7])); // Output: true
console.log(isValid([5, 6, 7, 8])); // Output: true
console.log(isValid([6, 7, 8])); // Output: false
console.log(isValid([7, 8])); // Output: true
