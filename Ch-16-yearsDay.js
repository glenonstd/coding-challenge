// function yearDays(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
//     return `${year} has 366 days`;

//   return `${year} has 365 days`;
// }

const yearDays = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} has 366 days`
    : `${year} has 365 days`;

console.log(yearDays(0));
console.log(yearDays(-64));
console.log(yearDays(2016));
console.log(yearDays(1974));
console.log(yearDays(-10));
console.log(yearDays(666));
console.log(yearDays(1857));
