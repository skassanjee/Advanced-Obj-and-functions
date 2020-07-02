//advanced objects and functions
//everything is an objects

//constructor
//We can create people from a person object
//every object has a prototype property
//we add a Person prototype to an athlete

//function constructor

//var john = {
  //name: 'John',
  //yearOfBirth: 1990,
  //job: 'teacher'
//};

var Person = function(name, yearOfBirth, job){
  this.name= name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

var john = new Person('John', 1990, 'job'
)


Person.prototype.calcAge = function(){
  console.log(2016-this.yearOfBirth)
}
//new creates an empty object
//function constructor returns content to the new object


console.log(john.calcAge())

//calcAge will work on anything created through Person, because it is in the prototype of Person

Person.prototype.lastName='Smith'

console.log(john.lastName)









//we can view the prototype in the console

john.__proto__.__proto__

//we can view the prototype all the way to null
//the object object has many properties and methods we can use, such as hasOwnProperty

//this also works with arrays because arrays are objects
//array function constructor has all the array methods such as pop and push
//this is built directly into javascript













console.log('-----------')
//Object.create


var personProto = {
  calculateAge: function(){
    console.log(2016-this.yearOfBirth);
  }
}

var john = Object.create(personProto)

//creates an empty of object with the prototype from personProto
//we can then add methods like normal


john.name='John'
john.yearOfBirth = 1990


//or we can ddo it all in the same step
//notice the syntax

var john = Object.create(personProto,
{
  name: { value: 'John' },
  yearOfBirth: { value: 1990 },
  job: { value: 'designer'}
})

//the object of valuese is the second argument







var a = 23
var b = a;
a = 26

//will be different valuese


obj1 = {
  name: 'John',
  age: 26
}

obj2 = obj1

obj1.age = 30


//both will be 30
//objects point to the same place in memory
//objects REFERENCE






//first class functions
//functions as arguments

var years = [1990, 1056, 1053, 1935];


function arrayCalc(arr, fn){
  var arrRes=[];
  for (var i = 0; i< arr.length;  i++){
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

function calcAge(el){
  return 2018- el;
}

var ages = arrayCalc(years, calcAge);
console.log(ages)