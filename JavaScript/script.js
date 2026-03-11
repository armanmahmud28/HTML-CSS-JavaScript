let x = 5;
let y = 6;
let z = x + y;

document.getElementById("demo").innerHTML = "The value of z is " + z;

document.getElementById("hello").textContent = "Hello From my home";

let age = 17;
let text = "You cann't drive";

if (age >= 18) {
  text = "You can drive";
} else if (age >= 13) {
  text = "Ok";
} else {
  text = "Noo";
}
document.getElementById("drive").innerHTML = text;

let m = 10;

document.getElementById("com").innerHTML = m != 10;
let textt = "";
for (let i = 1; i <= 5; i++) {
  textt += "Hello -> " + i + "<br>";
}
document.getElementById("loop").innerHTML = textt;
document.getElementById("loop").innerHTML = typeof textt;

function hello() {
  return "Hello World! ";
}

let out = hello();

document.getElementById("one").innerHTML = out;

function sum(a, b) {
  return a + b;
}

let add1 = sum(5, 5);

document.getElementById("two").innerHTML = add1;

const add = (a, b) => a * b;

let result = add(3, 5);
document.getElementById("wow").innerHTML = result;

//Create Object

const car = {
  name: "Audi",
  model: "A8",
  color: "Black",
};

document.getElementById("ob").innerHTML = "The car name is: " + car.name;

const person = {};

person.name = "Nahid";
person.age = 21;
person.eyecolor = "black";
delete person["eyecolor"];

document.getElementById("obj").innerHTML =
  "The person name is: " +
  person.name +
  " Age is: " +
  person.age +
  " & eyecolor: " +
  person.eyecolor;

let find = "age" in person;

document.getElementById("del").innerHTML = find;

//JavaScript Object Constructors

function Person(firstname, lastname, age) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
}

const myself = new Person("Arman", "Mahmud", 21);

document.getElementById("Con").innerHTML =
  "Name is: " +
  myself.firstname +
  " " +
  myself.lastname +
  " age is: " +
  myself.age;

//Date

const d = new Date();

document.getElementById("dd").innerHTML = d;
document.getElementById("ddd").innerHTML = d.toDateString();
document.getElementById("dddd").innerHTML = "Year is: " + d.getFullYear();
document.getElementById("f").innerHTML = "Month: " + d.getMonth();

document.getElementById("ff").innerHTML = "Day: " + d.getDay();
document.getElementById("fff").innerHTML = "Hours: " + d.getHours();

//JavaScript Temporal:

//Temporal is the new standard for date and time in JavaScript.

const zoned = Temporal.Now.zonedDateTimeISO();

document.getElementById("x").innerHTML = zoned.toString();

//Array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("xx").innerHTML = fruits.toString();

const cars = ["Saab", "Volvo", "BMW"];
let q = "<ul>";
for (let i = 0; i < cars.length; i++) {
  q += "<li>" + cars[i] + "</li>";
}
q += "</ul>";

document.getElementById("xxx").innerHTML = q;
