function dropElements(arr, func) {
  // Drop them elements.
  return  arr.reduce((acc, curr, i, array) =>  {
    if (func(curr)) {
      return acc = array.splice(i);
    }
    return acc;
  },[]);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
