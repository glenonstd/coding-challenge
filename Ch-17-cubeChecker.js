// function cubeChecker(volume, side) {
//   if (volume <= 0 && side <= 0) return false;

//   return volume === Math.pow(side, 3);
// }

const cubeChecker = (volume, side) =>
  volume <= 0 && side <= 0 ? false : volume === Math.pow(side, 3);

console.log(cubeChecker(8, 3));
console.log(cubeChecker(8, 2));
console.log(cubeChecker(-8, -2));
console.log(cubeChecker(0, 0));
console.log(cubeChecker(1, 5));
console.log(cubeChecker(125, 5));
