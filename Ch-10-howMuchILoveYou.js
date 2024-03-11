// function howMuchILoveYou(nbPetals) {
//   const phrase = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];

//   const idx = (nbPetals - 1) % phrase.length;
//   return phrase[idx];
// }

const howMuchILoveYou = (nb) =>
  ["I love you", "a little", "a lot", "passionately", "madly", "not at all"][
    (nb - 1) % 6
  ];

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
