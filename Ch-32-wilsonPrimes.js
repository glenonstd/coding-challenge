function amIWilson(p) {
  function bilPrima(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }

  function factor(a) {
    let res = BigInt(1);
    if (a === 0 || a === 1) return res;
    for (let i = BigInt(2); i <= a; i++) {
      res *= BigInt(i);
    }

    return res;
  }

  // (P-1)! + 1 / P*P

  if (p < 2 || !bilPrima(p)) return false;

  let numberFactorial = factor(BigInt(p) - BigInt(1)) + BigInt(1);

  return numberFactorial % (BigInt(p) * BigInt(p)) === BigInt(0);
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(6));
console.log(amIWilson(13));
console.log(amIWilson(563));
