function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])|[\s+|_+]/g, "$1-$2").toLowerCase();
}

spinalCase('This Is Spinal Tap');
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
spinalCase("thisIsSpinalTap");
