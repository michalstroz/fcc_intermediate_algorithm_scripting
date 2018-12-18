function steamrollArray(arr) {
  return arr.reduce((acc, curr) => Array.isArray(curr) ? acc.concat(steamrollArray(curr)) : acc.concat(curr), []);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
