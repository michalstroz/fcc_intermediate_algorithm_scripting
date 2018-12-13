function pairElement(str) {
  const basePairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  return str.split("").map((val) => [val, basePairs[val]]);
}

pairElement("GCG");
pairElement("CTCTA");
