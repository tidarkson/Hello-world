/*console.log('hello world');
console.log('I am Darkson')
console.warn("this is a warning");
console.error('this is an error');

// var, let, const

// string, numbers, boolean, null, symbol

const name = "Tee";
const age  = 28;
const rating = 3.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log (typeof age);

const s = "hello world";

console.log(s.length)

//arrays 

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ["apples", 'oranges', 'pear'];
fruits[0]= "bananas";
fruits[3] = 'paw paw'

console.log(fruits)

const digit = 670;

if (digit === 200) {
    console.log ("digit is equal to 200")   
} else if (digit > 200) {
    console.log('digit is greater than 200')
} else {
    console.log('digit is less than 200')
}

const x = 10;
const color = x > 10 ? 'red' : 'blue'


const number = 200;

if (number === 430) {
    console.log ('number is equal to 430')    
} else if (number > 430) {
    console.log ('number is greater than 430')
}
  else {
      console.log('number is less than 430')
  }

// javascript objects/

const room = {
    matress : 1,
    sockets : 2,
    "books and papers" : "numerous"
}

const wardrobe = {
    shirts : 15,
    belts : 2,
    boxers :7,
    shoes : 3,
    trousers: 8,
}
const shirts_num = wardrobe.shirts
const stationary = room["books and papers"]

const someObj = {
    propName: "John"
  };
  
  function propPrefix(str) {
    const s = "prop";
    return s + str;
  }
  
  const someProp = propPrefix("Name");
  console.log(someObj[someProp]);


  const desktop = {
      keyboard : 150,
      "mouse components": 3,
      "desktop screen": "LCD",
  }
  function checkDesktop (desktop) {
      if (desktop.hasOwnProperty(keyboard)) {
          return ("available")
      } else {
          return ("nothing in there")
      }
  }
   checkDesktop()*/


  // Setup
    /*const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
 
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');*/

  /*const myArr = [2, 3, 4, 5, 6];

let total = 0
for (let num = 0; num < myArr.length; num++) {
  total += myArr[num]
}
console.log (total)

//Multiplying elements using nested for loops
function multiplyAll(arr) {
  let product = 1;
  
  for (let i = 0; i < arr.length; i++ ){
    for (let j = 0; j < arr[i].length; j++){
      product*= arr[i][j]
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);*/

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

/*function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";

  // Only change code above this line
}

lookUpProfile("Akira", "likes");*/

/*function myOddNumber () {
  let i = 100
  for (let n = 0; n < 100; n += 5) {
    console.log(n + " is my favourite number")
  }
}
myOddNumber()*/


//ITERATING OVER ITEMS IN AN OBJECT
const myBookShelve = {
  first_shelf: 'my books',
  second_shelf: "manakere's books",
  third_shelf: my_items = ["body lotion", "soap", "deodorants", "powder", "scrub"],
  fourth_shelf: "random documents",
  fifth_shelf: "shoes"
}
console.log(myBookShelve)


function access_shelf(shelf){
  for (let j=0; j < shelf.length; j++) {
    return j
    
  }
}
console.log(access_shelf(myBookShelve))


//FINDING FACTORIAL
const twelve = 12

function factorialize (number){
  let factorial = 1
  for (let i = 1; i < number; i++){
    factorial*=i
  } return factorial
}
console.log(factorialize(12))


//FINDING THE LONGEST WORD IN A STRING
function findLongestWordLength(str){
  let words = str.split();
  let maxLength = 0;
    for (let i=0; i < words.length; i++){
      console.log(i)
      if (words[i].length > maxLength){
        maxLength= words[i].length
      } return maxLength
    }
}
console.log(findLongestWordLength("body lotion", "soap", "deodorants", "powder", "scrub"))

/*RETURN LARGEST NUMBER IN ARRAYS 
const anArray = [2,4,1,89,33,45,134]
function largest0fFour(arr){
  let result = [] //initialise empty array
  for(let i = 0; i < arr.length; i++){ //loop over each item in array
    let largestNumber = arr[i][0] //initialize largest number in sub array
      for (let j=1; j<arr[i].length; j++) {        //loop over number in sub array
        if (arr[i][j] > largestNumber){ //testing condition
          largestNumber= arr[i][j]  //reassign largest number
        }

      }
  }result.push(largestNumber)
} 
console.log(largest0fFour(anArray))*/

/*THIS IS A SWITCH STATEMENT
let number = 5

switch (number){
  case number=== 0:
    console.log ("number is equal to zero");
    break;
  case number < 0:
    console.log ("number is negative");
    break;
  case number> 0:
    console.log ("number is positive");
    break;
}*/

//CREATING STRINGS USING TEMPLATE LITERALS
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  } 

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

//CLASS AND CONTSRUCTOR BASICS
class Vegetable{
  constructor(name){
    this.name = name
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name);


//constructor inheritance and prototype

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); }; //A constructor function having prototype, can also be called a parent or SUPERTYPE

function Dog() { }
  Dog.prototype = Object.create(Animal.prototype) //Method that inherits the prototype from the parent
  Dog.prototype.constructor = Dog;

  Dog.prototype.bark = function (){ //Own method, even after inheritance of a prototype
    console.log ('Woof!')
  }

let beagle = new Dog(); //Instantiating the dog object
console.log (beagle)