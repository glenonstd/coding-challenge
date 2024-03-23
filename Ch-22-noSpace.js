// function noSpace(x) {
//   // let result = "";

//   // for (let i = 0; i < x.length; i++) {
//   //   if (x[i] !== " ") result += x[i];
//   // }

//   // return result;

//   // return x.split(" ").join("");

//   return x.replace(/\s/g, "");
// }

// const noSpace = (x) => x.split(" ").join("");
const noSpace = (x) => x.replace(/\s/g, "");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(noSpace("8aaaaa dddd r     "));
