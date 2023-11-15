// Data Types
let Fname = "John";
console.log(Fname);

let age: number;
age = 25;
console.log(typeof age);

let isTrue: boolean;
// in TS, the default value of boolean is not passed. This is due to strict.
isTrue = false;

let isValid: boolean = false;
console.log(isValid);

let nameList: string[]; // defining the array
nameList = ["Sumayyah", "Sayyed", "Sam"];
let numList: Array<number> = [1, 2, 3, 4, 5]; // another method

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
enum Color {
  Red,
  Blue,
  Green,
  Yellow,
}

let oneColor: Color = Color.Yellow;
// Returns the Index of the color
console.log(oneColor);

// using const with enums removes the self invoking function from the js file and only keeps the value and their index you are using

const enum Country {
  Pakistan,
  Russia,
  Canada,
  India,
}

let countryIndex: Country = Country.Canada;
console.log(countryIndex);
// check the index.js, istead of of whole enum, only the used value is kept

let swapNums: [firstNumber: number, secondNumber: number];

function swap(num1: number, num2: number): [number, number] {
  return [num2, num1];
}

swapNums = swap(10, 20);
console.log(swapNums[0]);

let department: any;
department = "CS";
department = 100;
console.log(department);
// Avoid using any in code, and to use it, uncomment the line => "noImplicitAny": true,
// though I used any above and did not uncomment the line and console still gave the value

// Functions

// Name Function
function add(a: number, b: number): number {
  return a + b;
}
console.log("Addition: ", add(100, 110));

// function add(a, b): number {}. This :number after the round brackets define the return type, meaning the value that the function will return is number. for this to work the function must return some value

// Arrow Function
const subtract = (a: number, b: number): number => a - b;
console.log("Subtraction: ", subtract(150, 10));

// Function Expression
const mulitply = function (a: number, b: number): number {
  return a * b;
};
console.log("Multiplication: ", mulitply(6, 4));

//Optional Parameter
const divide = function (a: number, b: number, c?: number): number {
  return c ? a / b / c : a / b;
};
console.log("Division: ", divide(150, 10, 1.5));
// Here C is the optional parameter

// Default Parameter
const addition = function (a: number, b: number, c = 10): number {
  return a + b + c;
};
console.log("Addition with default value: ", addition(10, 10));
console.log("Addition without default value: ", addition(10, 10, 20));

// Arraya as a Parameter
const arrayAddition = function (
  a: number,
  b: number,
  ...nums: number[]
): number {
  return a + b + nums.reduce((acc, num) => acc + num);
};

const numsArr = [3, 4, 5];
console.log(
  "Addition with array as a parameter: ",
  arrayAddition(1, 2, ...numsArr)
);
console.log(
  "Addition with array as a parameter: ",
  arrayAddition(1, 2, ...[3, 4, 5, 6, 7])
);
console.log(
  "Addition with array as a parameter: ",
  arrayAddition(1, 2, 3, 4, 5, 6, 7)
);

function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}

let concatNum = getItems<number>([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d"]);

console.log(concatNum, concatString);

// Classes

class Employee {
  // id:number; // due to strict mode, the error throws that id does not have an initializer. To avoid this issue, use ! after the name
  id!: number;
  name!: string;
  age!: number;
  address!: string;

  // in TS, a class can contain only one constructor, either default constructor, or the paramterized constructor
  constructor() {
    console.log(`Hello ${this.name}`);
    // this will run immediately, keeping the value of name to be undefined
  }
  //   constructor(id: number, name: string, age: number, address: string){}
}

let user = new Employee();
user.id = 1;
user.name = "JOHN DOE";
user.age = 23;
user.address = "Pakistan";

console.log(user);

class Genres {
  genre: string;
  constructor(genre: string) {
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
  id: number;
  name: string;
  author: string;
  #publicationYear: string; // this var is not visible in the Books class, The value is being assigned to it, though it cannot be accessed or be visible to the user
  private isbn: number;

  constructor(
    genre: string,
    id: number,
    name: string,
    author: string,
    publicationYear: string,
    isbn: number
  ) {
    // Can i access only the variables i want, WHY all?
    super(genre);
    this.id = id;
    this.name = name;
    this.author = author;
    this.#publicationYear = publicationYear; // private var
    this.isbn = isbn; // private var
    console.log("Publication ", this.#publicationYear); // value is being assigned, though is not visible
  }

  insertionSuccessful(): string {
    return `The Book ${this.name} has been inserted to the DB`;
  }

  // getter and setters
  get year(): string {
    return this.#publicationYear;
  }
  set year(publicationYear: string) {
    this.#publicationYear = publicationYear;
  }
}

let newBook = new Books(
  "Education",
  1,
  "Atomic Habits",
  "Sumayyah",
  "oct-2021",
  12345
);
newBook.year = "2021"; // this does change the values, though is not visible

console.log(newBook);
console.log(newBook.year);
console.log("updated");
// console.log(newBook.publicationYear); // will throw an error because the var is private
console.log(newBook.insertionSuccessful());

// Interfaces

class CS implements passedStudents {
  totalStudents: number;

  constructor(totalStudents: number) {
    this.totalStudents = totalStudents;
  }
  passed(): Students[] {
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

let passedStudent: Students[] = allStudents.passed();
console.log("Passed Students: ", passedStudent);

interface Students {
  id: number;
  name: string;
  age?: number; // optional variable
  email: string;
}

interface Library extends Students {
  books: number;
}

let libraryData: Library = {
  name: "Ayesha",
  id: 2,
  email: "ash@gmail.com",
  books: 5,
};
console.log("Library: ", libraryData);

interface passedStudents {
  passed(): Students[];
}

// to export an interface, use export on the front of the interface, like so => export interface Users

// Decorators
// Modify the behavior of Classes at runtime
// It is used internally be Angular
