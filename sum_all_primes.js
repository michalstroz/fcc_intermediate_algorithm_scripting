function sumPrimes(num) {
  return Array(num - 1).fill().map((_, i) => i + 2).reduce((acc, curr) => {
    for (let i = 2, s = Math.sqrt(curr); i <= s; i++) {
      if (curr % i === 0) return acc;
    }
    return acc + curr;
  });
}

sumPrimes(10);
sumPrimes(977);
