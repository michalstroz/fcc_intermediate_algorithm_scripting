var Person = function(firstAndLast) {
  let arr = firstAndLast.split(" ");

  this.getFirstName = () => arr[0];
  this.getLastName = () => arr[1];
  this.getFullName = () => arr.join(" ");
  this.setFirstName = (first) => arr[0] = first;
  this.setLastName = (last) => arr[1] = last;
  this.setFullName = (firstAndLast) => arr = firstAndLast.split(" ");
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
