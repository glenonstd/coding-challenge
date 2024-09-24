function sc(floor) {
  // if (floor <= 1) return "";

  // const teriak = "Aa~ ".repeat(floor - 1) + "Pa!";

  // return floor <= 1 ? "" : floor <= 6 ? teriak + " Aa!" : teriak;

  return floor <= 1
    ? ""
    : Array(floor - 1)
        .fill("Aa~")
        .join(" ") +
        " Pa!" +
        (floor <= 6 ? " Aa!" : "");
}

console.log(sc(2));
console.log(sc(6));
console.log(sc(7));
console.log(sc(10));
console.log(sc(1));
console.log(sc(-1));
