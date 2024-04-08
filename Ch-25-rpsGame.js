const rps = (p1, p2) => {
  // if (p1 === p2) return "Draw!";

  // if (
  //   (p1 === "rock" && p2 === "scissors") ||
  //   (p1 === "scissors" && p2 === "paper") ||
  //   (p1 === "paper" && p2 === "rock")
  // )
  //   return "Player 1 won!";

  // return "Player 2 won!";

  // const rules = {
  //   rock: "scissors",
  //   scissors: "paper",
  //   paper: "rock",
  // };

  // if (p1 === p2) return "Draw!";

  // const winner = rules[p1] === p2 ? 1 : 2;

  // return `Player ${winner} won!`;

  const rules = { rock: 1, scissors: 2, paper: 3 };

  const result = (rules[p1] - rules[p2] + 3) % 3;

  return result === 0
    ? "Draw!"
    : result === 2
    ? "Player 1 won!"
    : "Player 2 won!";
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
console.log(rps("rock", "rock"));
