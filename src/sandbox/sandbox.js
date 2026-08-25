// src/sandbox/sandbox.js
console.log("Sandbox is running 🚀");

import { teachers } from "./teachers.js";
console.log(teachers);

// *** Show Welcome Message *** ///
// export default function showWelcomeMessage() {
//   console.log("Welcome to the sandbox!");
// }

// showWelcomeMessage();
// showWelcomeMessage();
// showWelcomeMessage();

// *** Function declaration *** //
// export default function sayHi(name) {
//  console.log(`Hello, ${name}!`);
// }

// sayHi("Anna");
// sayHi("Bob");
// sayHi("Charlie");

const sayHi = (name) => {
  return `Hello, ${name}!`;
};

console.log(sayHi("Anna"));
console.log(sayHi("Bob"));
console.log(sayHi("Charlie"));

// *** Objects *** //
// const course = {
// title: "Introduction to React",
//  teacher: "RACE",
//  duration: "1 day",
//  isActive: true,
//};

// console.log(course);

// *** Property Acces *** //
// const course = { title: "JavaScript", teacher: "Anna", duration: 5 };

// DOT NOTION
// console.log(course.title);
// console.log(course.teacher);
//console.log(course.duration);

// BRACKET NOTATION
// console.log(course["title"]);

// *** Shorthand Proporties *** //
// const name = "Anna";
// const age = 24;
// const email = "anna@example.com";

// const student = { name, age, email };

// console.log(student);

// *** Destructuring af objects *** //
const course = { title: "JavaScript", teacher: "Anna", duration: 5 };
const { title, teacher, duration } = course;

console.log(title);
console.log(teacher);
console.log(duration);

// *** Arrays *** //
const courses = ["JavaScript", "React", "WordPress", "UX"];

// Print hele arrayet i browserens console.
console.log(courses);

// Print det første element.
console.log(courses[0]);

// Print det tredje element.
console.log(courses[2]);

// Print antallet af elementer med length.
console.log(courses.length);

// *** Destructuring af arrays *** //

const colors = ["red", "green", "blue"];

// Brug destructuring til at hente de første to værdier
const [firstColor, secondColor] = colors;

// Print begge variabler i browserens console.
console.log(firstColor); // red
console.log(secondColor); // green



// *** Map() *** //
// Opret et array 
const productsTest = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
];

// Brug map() til at oprette et nyt array, der kun indeholder produktnavnene.
const productNames = productsTest.map((product) => product.name);

// Print det nye array i browserens console.
console.log(productNames);


// *** Filter() *** //
// Opret et array
const products = [
  { id: 1, name: "Keyboard", price: 799 },
  { id: 2, name: "Mouse", price: 399 },
  { id: 3, name: "Monitor", price: 1999 },
  { id: 4, name: "Headphones", price: 599 },
];

// Brug filter() til at oprette et nyt array med produkter, der koster mindre end 800.
const affordableProducts = products.filter((product) => product.price < 800);

// Print resultatet i browserens console
console.log(affordableProducts);



// *** Find() *** //
// Brug find() til at finde produktet med id 2.
const product = products.find((product) => product.id === 2);

// Gem resultatet
const foundProduct = product;

// Print foundProduct i browserens console.
console.log(foundProduct);

// Print derefter produktets navn
console.log(foundProduct.name);