function fearNotLetter(str) {
  let i = 0;
  while (i < str.length) {
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      return String.fromCharCode(str.charCodeAt(0) + i);
    }
    i++;
  }
}

fearNotLetter("abce");
