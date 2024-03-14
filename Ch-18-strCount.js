// function strCount(str, letter) {
//   // let total = 0;

//   // for (let i = 0; i < str.length; i++) {
//   //   if (str[i] === letter) total += 1;
//   // }

//   // return total;

//   // return str.split(letter).length - 1;
//   // const regex = new RegExp(letter, "g");
//   // const result = str.match(regex);

//   // return result ? result.length : 0;
// }

const strCount = (str, letter) => str.split(letter).length - 1;

console.log(strCount("Hello", "o"));
console.log(strCount("Hello", "l"));
console.log(strCount("", "z"));
