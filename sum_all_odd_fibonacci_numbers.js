function sumFibs(num) {
  let a = 0, b = 1, temp, sum = 0;

  while (b <= num) {
    temp = b;
    b = a + b;
    a = temp;
    if (a % 2 === 1) sum += a;
  }

  return sum;
}

sumFibs(10);
sumFibs(4000000);
sumFibs(75024);
