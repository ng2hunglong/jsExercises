var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
//   fullName = firstAndLast;
  let fullName = firstAndLast;
  this.getFullName = function() {
    return fullName;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
  };
  this.getFirstName = function() {
    return fullName.split(' ')[0];
  }
  this.getLastName = function() {
    return fullName.split(' ')[1];
  }
  this.setFirstName = function(first) {
    let nameArr = fullName.split(' ');
    nameArr[0] = first;
    fullName = nameArr.join(' ');
  }
  this.setLastName = function(last) {
    let nameArr = fullName.split(' ');
    nameArr[1] = last;
    fullName = nameArr.join(' ');
  }
};

var bob = new Person('Bob Ross');
// console.log(Object.keys(bob));
// console.log(bob.getLastName());
bob.setFirstName('Haskell');
console.log(bob.getFirstName());
console.log(bob.getFullName());
