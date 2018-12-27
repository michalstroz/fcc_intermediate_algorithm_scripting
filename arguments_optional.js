function addTogether() {
  const args = Array.prototype.slice.call(arguments);
  if (args.some((val) => typeof val !== "number")) {
    return undefined;
  }
  let sum = args.reduce((a, b) => a + b, 0);
  if (args.length > 1) {
    return sum;
  } else {
    return (x) => {
      return typeof x === "number" ? sum + x : undefined;
    };
  }
}

addTogether(2, 3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)(3);
addTogether(2)([3]);
