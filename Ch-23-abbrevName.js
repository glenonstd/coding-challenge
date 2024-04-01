// function abbrevName(name) {
//   return name
//     .split(" ")
//     .map((char) => char[0].toUpperCase())
//     .join(".");
// }

const abbrevName = (name) =>
  name
    .split(" ")
    .map((char) => char[0].toUpperCase())
    .join(".");

console.log(abbrevName("sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
