function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  const positiveNumb = input.filter((numb) => numb > 0).length;
  const negativeNumb = input
    .filter((numb) => numb < 0)
    .reduce((acc, cur) => acc + cur, 0);

  return [positiveNumb, negativeNumb];
}

console.log(countPositivesSumNegatives(null));

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
