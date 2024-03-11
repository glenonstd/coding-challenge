function pillars(numPill, dist, width) {
  if (numPill === 1) return 0;

  const totalDist = (numPill - 1) * dist * 100;

  const totalwidth = (numPill - 2) * width;

  return totalDist + totalwidth;
}

console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));
