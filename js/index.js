"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Books_publicationYear;
// Data Types
let Fname = "John";
console.log(Fname);
let age;
age = 25;
console.log(typeof age);
let isTrue;
// in TS, the default value of boolean is not passed. This is due to strict.
isTrue = false;
let isValid = false;
console.log(isValid);
let nameList; // defining the array
nameList = ["Sumayyah", "Sayyed", "Sam"];
let numList = [1, 2, 3, 4, 5]; // another method
let resultList = numList.filter((num) => num > 2);
console.log(resultList);
let findOneVal = resultList.find((num) => num === 3);
console.log(findOneVal);
let sum = numList.reduce((acc, num) => acc + num);
/**
 * 1 + 2 = 3
 * 3 + 3 = 6
 * 6 + 4 = 10
 * 10 + 5 = 15
 */
console.log(sum);
// enum is a datatype in TS
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
let oneColor = Color.Yellow;
// Returns the Index of the color
console.log(oneColor);
let countryIndex = 2 /* Country.Canada */;
console.log(countryIndex);
// check the index.js, istead of of whole enum, only the used value is kept
let swapNums;
function swap(num1, num2) {
    return [num2, num1];
}
swapNums = swap(10, 20);
console.log(swapNums[0]);
let department;
department = "CS";
department = 100;
console.log(department);
// Avoid using any in code, and to use it, uncomment the line => "noImplicitAny": true,
// though I used any above and did not uncomment the line and console still gave the value
// Functions
// Name Function
function add(a, b) {
    return a + b;
}
console.log("Addition: ", add(100, 110));
// function add(a, b): number {}. This :number after the round brackets define the return type, meaning the value that the function will return is number. for this to work the function must return some value
// Arrow Function
const subtract = (a, b) => a - b;
console.log("Subtraction: ", subtract(150, 10));
// Function Expression
const mulitply = function (a, b) {
    return a * b;
};
console.log("Multiplication: ", mulitply(6, 4));
//Optional Parameter
const divide = function (a, b, c) {
    return c ? a / b / c : a / b;
};
console.log("Division: ", divide(150, 10, 1.5));
// Here C is the optional parameter
// Default Parameter
const addition = function (a, b, c = 10) {
    return a + b + c;
};
console.log("Addition with default value: ", addition(10, 10));
console.log("Addition without default value: ", addition(10, 10, 20));
// Arraya as a Parameter
const arrayAddition = function (a, b, ...nums) {
    return a + b + nums.reduce((acc, num) => acc + num);
};
const numsArr = [3, 4, 5];
console.log("Addition with array as a parameter: ", arrayAddition(1, 2, ...numsArr));
console.log("Addition with array as a parameter: ", arrayAddition(1, 2, ...[3, 4, 5, 6, 7]));
console.log("Addition with array as a parameter: ", arrayAddition(1, 2, 3, 4, 5, 6, 7));
function getItems(items) {
    return new Array().concat(items);
}
let concatNum = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(["a", "b", "c", "d"]);
console.log(concatNum, concatString);
// Classes
class Employee {
    // in TS, a class can contain only one constructor, either default constructor, or the paramterized constructor
    constructor() {
        console.log(`Hello ${this.name}`);
        // this will run immediately, keeping the value of name to be undefined
    }
}
let user = new Employee();
user.id = 1;
user.name = "JOHN DOE";
user.age = 23;
user.address = "Pakistan";
console.log(user);
class Genres {
    constructor(genre) {
        this.genre = genre;
        console.log(`The Genre of ${this.genre} has been created`);
        // return `The Genre of ${this.genre} has been created`;
        // Contructor doesnot allow to return anyhting.
    }
    static greetGenreWithClassName() {
        console.log("Welcome to the database Genre");
    }
}
const newGenre = new Genres("Education");
console.log(newGenre);
Genres.greetGenreWithClassName();
class Books extends Genres {
    constructor(genre, id, name, author, publicationYear, isbn) {
        // Can i access only the variables i want, WHY all?
        super(genre);
        _Books_publicationYear.set(this, void 0); // this var is not visible in the Books class, The value is being assigned to it, though it cannot be accessed or be visible to the user
        this.id = id;
        this.name = name;
        this.author = author;
        __classPrivateFieldSet(this, _Books_publicationYear, publicationYear, "f"); // private var
        this.isbn = isbn; // private var
        console.log("Publication ", __classPrivateFieldGet(this, _Books_publicationYear, "f")); // value is being assigned, though is not visible
    }
    insertionSuccessful() {
        return `The Book ${this.name} has been inserted to the DB`;
    }
    // getter and setters
    get year() {
        return __classPrivateFieldGet(this, _Books_publicationYear, "f");
    }
    set year(publicationYear) {
        __classPrivateFieldSet(this, _Books_publicationYear, publicationYear, "f");
    }
}
_Books_publicationYear = new WeakMap();
let newBook = new Books("Education", 1, "Atomic Habits", "Sumayyah", "oct-2021", 12345);
newBook.year = "2021"; // this does change the values, though is not visible
console.log(newBook);
console.log(newBook.year);
console.log("updated");
// console.log(newBook.publicationYear); // will throw an error because the var is private
console.log(newBook.insertionSuccessful());
// Interfaces
class CS {
    constructor(totalStudents) {
        this.totalStudents = totalStudents;
    }
    passed() {
        // passing an array of students
        return [
            { id: 3, name: "Sam Sayyed", email: "samsayyed@gmail.com" },
            { id: 4, name: "Aisha Khan", email: "aishakhan@gmail.com" },
            { id: 5, name: "Ali Ahmed", email: "aliahmed@gmail.com" },
            { id: 6, name: "Zainab Malik", email: "zainabmalik@gmail.com" },
        ];
    }
}
let allStudents = new CS(42);
console.log("CS CLASS: ", allStudents);
let passedStudent = allStudents.passed();
console.log("Passed Students: ", passedStudent);
let libraryData = {
    name: "Ayesha",
    id: 2,
    email: "ash@gmail.com",
    books: 5,
};
console.log("Library: ", libraryData);
// to export an interface, use export on the front of the interface, like so => export interface Users
// Decorators
// Modify the behavior of Classes at runtime
// It is used internally be Angular
