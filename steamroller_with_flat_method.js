function steamrollArray(arr) {
  return arr.flat(9999999);
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
