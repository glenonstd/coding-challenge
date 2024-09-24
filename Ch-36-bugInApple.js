// function sc(apple) {
//   for (let i = 0; i < apple.length; i++) {
//     let y = apple[i].indexOf("B");

//     if (y !== -1) {
//       return [i, y];
//     }
//   }
// }

const sc = (apple) => {
  const x = apple.findIndex((baris) => baris.includes("B"));
  const y = apple[x].indexOf("B");

  return [x, y];
};

console.log(
  sc(
    (apple = [
      ["B", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
    ])
  )
);
console.log(
  sc(
    (apple = [
      ["A", "A", "A", "A", "A"],
      ["A", "B", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
    ])
  )
);
console.log(
  sc(
    (apple = [
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "A", "A", "A", "A"],
      ["A", "B", "A", "A", "A"],
    ])
  )
);
