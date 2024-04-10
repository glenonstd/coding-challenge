// function cockroachSpeed(s) {
//   // const kiloMeter = 100000;
//   // const second = 3600;

//   // const speed = (s * kiloMeter) / second;

//   // return Math.floor(speed);

//   return Math.floor((s * 100000) / 3600);
// }

const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));
