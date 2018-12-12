function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  } else {
    const index = str.indexOf(str.match(/[aeiou]/));
    return index === -1 ? str + "ay" : str.slice(index) + str.slice(0, index) + "ay";
  }
}

translatePigLatin("consonant");
translatePigLatin("california");
translatePigLatin("paragraphs");
translatePigLatin("glove");
translatePigLatin("algorithm");
translatePigLatin("hgtrwbtrwqsdzxv");
