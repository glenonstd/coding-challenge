// function points(games) {
//   let total = 0;

//   // for (let i = 0; i < games.length; i++) {
//   //   const [scoreKita, scoreMusuh] = games[i].split(":").map(Number);

//   //   if (scoreKita > scoreMusuh) total += 3;
//   //   if (scoreKita === scoreMusuh) total += 1;
//   // }

//   for (const game of games) {
//     const [scoreKita, scoreMusuh] = game.split(":").map(Number);

//     if (scoreKita > scoreMusuh) total += 3;
//     if (scoreKita === scoreMusuh) total += 1;
//   }

//   return total;
// }

function points(games) {
  return games.reduce((total, game) => {
    const [scoreKita, scoreMusuh] = game.split(":").map(Number);
    if (scoreKita > scoreMusuh) return (total += 3);
    if (scoreKita === scoreMusuh) return (total += 1);

    return total;
  }, 0);
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"])
);
