// function countSheeps(sheep) {
//   let result = 0;

//   if (!sheep.length) return result;

//   for (let i = 0; i < sheep.length; i++) {
//     if (undefined || null) {
//       result = 0;
//     } else if (sheep[i] === true) {
//       result++;
//     }
//   }

//   return result;
// }

// function countSheeps(sheep) {
//   // if (!sheep.length) return 0;
//   return sheep.filter(Boolean).length;
// }

const countSheeps = (sheep) => sheep.filter(Boolean).length;

console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(
  countSheeps([undefined, null, false, true, true, false, null, undefined])
);
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
