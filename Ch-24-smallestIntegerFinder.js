class SmallestIntegerFinder {
  findSmallestInt(args) {
    // let smallest = args[0];

    // for (let i = 0; i < args.length; i++) {
    //   if (args[i] < smallest) {
    //     smallest = args[i];
    //   }
    // }

    // return smallest;

    // return args.sort((a, b) => a - b)[0];

    return Math.min(...args);
  }
}

let sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]));
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]));
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]));
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]));
