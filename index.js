const person = {
  name: "Awesome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  } ]
};
console.log(person.occupation.yearsHeld);

const collections = [1,    [2,   [4, [5, [6]], 3]   ]   ];
console.log(collections[1][1][1][1][0]);  // returns 6
var word;
word = 'bird';
var s = 'Mr. X';

console.log(word);

word = 'dog';

console.log(word);

function log() {
  var greeting = 'Hello!';
  console.log(greeting);
}
function log(s) {
  console.log(s);
}

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
    log(inaccessible);
    return innerVariable;
  }
}
var myScope = outerFunction();
myScope();
log(myScope())
log('bonjour')



// function find(array, criteriaFn) {
//   for (let i = 0; i < array.length; i++) {
//     if (criteriaFn(array[i])) {
//       return array[i]
//     }
//   }
// }

function find(array, criteriaFn) {
  let current = array;
  let next = [];
 
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
 
    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
   }
    current = next.shift()
  }
 
  // if we haven't
  return null
}
// how to use the find function: need to define criteraFn as a function 'n => n > 4'
  console.log(find(collections,n => n > 4));
  
  var element = document.createElement('div');
  element.innerHTML = 'Hello, DOM!';
  element.style.backgroundColor = '#f9f9f9';
  
  Document.body.appendchild(element);