function uniteUnique(arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    arr.push(...args[i].filter((val) => arr.indexOf(val) === -1))
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
