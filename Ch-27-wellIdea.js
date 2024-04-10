function well(x) {
  // const good = x.filter((idea) => idea === "good").length;

  // if (good === 1 || good === 2) return "Publish!";

  // if (good > 2) return "I smell a series!";

  // return "Fail!";

  // const result = x.reduce((acc, val) => {
  //   return acc + (val === "good" ? 1 : 0);
  // }, 0);

  // if (result === 1 || result === 2) return "Publish!";

  // if (result > 2) return "I smell a series!";

  // return "Fail!";

  let result = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") result += 1;
  }

  if (result === 1 || result === 2) return "Publish!";

  if (result > 2) return "I smell a series!";

  return "Fail!";
}

console.log(well(["bad", "bad", "bad"]));
console.log(well(["good", "bad", "bad", "bad", "bad"]));
console.log(
  well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"])
);
