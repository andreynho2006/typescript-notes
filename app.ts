// string
let myName: string = 'Max';
//myName = 7  //eroor

// number
let myAge: number = 27; //int, float also
// myage = "Max" // Error

//boolean
let hasHobbies: boolean = true;
hasHobbies = false;
// hasHobbies = 1; // Error

// assign types
let myRealAge: number;
myRealAge = 27;
//myRealAge = '27'; // ERROR

// array
let hobbies: any[] = ['Cooking', 'Sport'];
//console.log(typeof hobbies[0]);
hobbies = [100];
// hobbies = 10 //Error

// tuples
let address: [string, number] = ['Super Street', 99];

// enums
enum Color {
  Gray, // 0
  Green = 100, // 1
  Blue // 101
}

let myColor: Color = Color.Blue;
console.log(myColor); // Color.Green = 100

// any
let car: any = 'BMW';
console.log(car);
car = {
  brand: 'BMW',
  series: 3
};
console.log(car);

// functions
function returnName(): string {
  return myName;
}
console.log(returnName());

// void
function sayHello(): void {
  console.log('Hello!');
  // return myAge; // ERROR
}

// argument types
function multiply(val1: number, val2: number): number {
  return val1 * val2;
}
//console.log(multiply(2, "Max")); // ERROR
console.log(multiply(2, 5));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply(); ERROR
myMultiply = multiply;
console.log(myMultiply(5, 2));

// Objects
let userData: { name: string; age: number } = {
  name: 'Max',
  age: 34
};

// userData = {}; // ERROR
// userData = {
//   a: 'Hello',
//   b: 32
// };  // ERROR name of the properties do not match
userData = {
  name: 'Max',
  age: 35
};
console.log(userData);

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// complex = {}; ERROR

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 3.99, 10],

  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = '27';

// check types
let finalValue = 'A string';
if (typeof finalValue == 'string') {
  console.log('finalValue is a number');
}

// never (it should never be reached)
function neverReturns(): never {
  throw new Error('An error');
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;

// EXERCISE
type BankAccount = { money: number; deposit: (value: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: 'Andrei',
  bankAccount: bankAccount,
  hobbies: ['Sports', 'Cooking']
};

myself.bankAccount.deposit(3000);

console.log(myself);
