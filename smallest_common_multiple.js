function smallestCommons(arr) {
  const sortRange = arr.sort((a, b) => a - b);
  const rangeArr = [...Array(sortRange[1] - sortRange[0] + 1).keys()].map((_, i) => i + sortRange[0]);
  console.log(rangeArr);

  const lcd = (a, b) => {
    let c = 0;
    while (b != 0) {
      c = a % b;
      a = b;
      b = c;
    }
    return a;
  }

  const smc = (a, b) => {
    return (a * b) / (lcd(a, b));
  }

  return rangeArr.reduce((acc, curr) => smc(acc, curr));
}


console.log(smallestCommons([1, 5]));
smallestCommons([23, 18]);
