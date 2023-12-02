// alert("Hello");
// console.log("Hello");
// let age = 21; //overwritten later
// const name = "Ismail"//not overwritten

// console.log(age);

// String

// let firstName = "Ismail";
// let lastName = "Ali";
// let random = "Learning JS";

// Access String character
// console.log(firstName[0]);

// String Methods

// console.log(firstName.toUpperCase());
// console.log(lastName.toLowerCase());

// for piece of characters in strings👇
// console.log(random.substring(0, 8));
// console.log(random.slice(0, 8));

// Case Sensitive String Methods 👇
// console.log(firstName.indexOf("l"));
// console.log(firstName.lastIndexOf("i"));
// console.log(lastName.replace("Ali", "Khan"));
// console.log(lastName.replaceAll("i", "-"));
// console.log(firstName.startsWith("I"));
// console.log(firstName.endsWith("l"));
// console.log(random.includes("JS"));

// JS Numbers

// let radius = 15;
// const pi = 3.14;


// Addition,Sub,Multi,Division,Power,Percentage
// console.log(11 + 12, 11 - 12, 11 * 12, 11 / 12, 11 ** 12, 11 % 12);

// Area of circle
// let area = pi * radius ** 2
// console.log(area);

// Increment Techniques or Decrement Techniques

// Increment 1
// radius = radius + 1; || radius++;

// Decrement 1
// radius = radius - 1; || radius--;

// Increment more than 1
// radius = radius + 5; || radius += 5;

// Decrement more than 1
// radius = radius - 5; || radius -= 5;

// Not a Number
// let random = "XYZ"
// console.log(radius / random); //output is NaN

// Template Literals

// let firstName = "Ismail";
// let lastName = "Ali";
// let age = 21;

// Without template Literals
// console.log("My Name is " + firstName + " " + lastName + ", " + "i'm " + age + " Year's old");

// with template literals
// console.log(`My Name is ${firstName} ${lastName}, i'm ${age} Year's old`);

// Array
// let items = ["bread", "butter", "salt", "jam"];
// let newitems = ["pizza", "water"];
// Access element from array
// console.log(items[3]);

// Change element in array || overwrite element
// items[3] = "pizza"

// Properties of array
// console.log(items.length);

// Methods
// console.log(items.join(",")); // combine element in single string
// console.log(items.indexOf("bread")); //find element index position
// console.log(items.concat(newitems)); //concat new array into old

// push 👇
// console.log(items.push("water")); //destructive method it change original array

// pop
// console.log(items.pop()); //also destructive method
// console.log(items);