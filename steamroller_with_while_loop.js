function steamrollArray(arr) {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    Array.isArray(next) ? stack.push(...next) : res.push(next);
  }
  return res.reverse();
}

steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, {}, [3, [[4]]]]);
