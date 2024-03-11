function flickSwitch(arr) {
  let res = [];
  let switchVal = true;

  for (let item of arr) {
    if (item === "flick") {
      switchVal = !switchVal;
    }

    res.push(switchVal);
  }

  // arr.map((item) => {
  //   if (item === "flick") {
  //     switchVal = !switchVal;
  //   }
  //   res.push(switchVal);
  // });

  return res;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
