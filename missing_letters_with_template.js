function fearNotLetter(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const template = letters.slice(letters.indexOf(str[0]), letters.indexOf(str[str.length - 1]) + 1).split("");
  return template.filter((char) => !str.includes(char))[0];
}

fearNotLetter("abce");
