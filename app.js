// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
let a = "Artem";
console.log (a)
a = "Eva";
console.log (a)

// Базові арифметичні оператори

const width = 5*3;
const height = 3+3;
const space = width*height;
const newWidth = width - 3;
const volume = 3**3;
console.log(volume)

// Строкові операори
const city = 'Київ';
const street = 'Дарницький бульвар';
const appart = 'кв.15';
console.log (city + ', ' + street + ' ' + 12 + ', ' + appart);

// Оператори присваювання
let age = 18 + 11;
age += 2; // age = age + 2
age -= 2; // age = age - 2
age *= 2; // age = age * 2

age ++; // age = age + 1
age --; // age = age - 1

console.log (age);

// Оператори порівняння
const Vasia = 20;
console.log (age > Vasia);
console.log (age >= Vasia);
console.log (age < Vasia);
console.log (age <= Vasia);
console.log (age == Vasia);

// Порядок операторів
const isSuited = 100 - 10 > 90 - 5;
console.log (isSuited); 

const ab = (6 + 10) / 2;
console.log(ab);

let b;
let c;
c = b = 100 + 50;
console.log(c);
console.log(b);
