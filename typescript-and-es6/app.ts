// let & const
console.log('<< LET & CONST >>');
let variable = 'Test';
// let is block scoped
console.log(variable);
variable = 'Another value';

// const
const maxLevels = 100;
console.log(maxLevels);
// cannot reassign a constant
// maxLevels = 99;

// block scope
function reset() {
  //console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

// Arrow function
console.log('<< ARROW FUNCTION >>');
const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};
console.log(addNumbers(3, 2));

const multiplyNumbers = (num1: number, num2: number): number => num1 * num2;

console.log(multiplyNumbers(3, 5));

const greet = () => {
  console.log('Hello!');
};
greet();

const greetFriend = (friendName: string) => {
  console.log('Hello ' + friendName);
};
greetFriend('Simona');

// default parameters
console.log('<< DEFAULT PARAMETERS >>');
const countdown = (start: number = 10): void => {
  while (start > 0) {
    console.log(start);
    start--;
  }
  console.log('Done ', start);
};
countdown(20);

// rest & spread operator
console.log('<< REST & SPREAD OPRATOR>>');

const numbers = [1, 10, 99, -5];
console.log(Math.max(33, 55, 7, -4));
console.log(Math.max(...numbers)); //spread operator

function makeArray(args1: number, args2: number) {
  return [args1, args2];
}
console.log(makeArray(1, 2));

function makeArray2(name: string, ...args: number[]) {
  //rest operator
  return args;
}
console.log(makeArray2('Max', 1, 2, 3, 4));

// destructuring
console.log('<< DESTRUCTURING >>');

const myHobbies = ['Cooking', 'Sports'];
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log(myHobbies[0], myHobbies[1]);
console.log(hobby1, hobby2);

const [hobby11, hobby22] = myHobbies;
console.log(hobby11, hobby22);

const myUserData: { userName: string; age: number } = {
  userName: 'Max',
  age: 32
};
const userName = myUserData.userName;
const userAge = myUserData.age;
console.log(userName, userAge);

const myUserData1: { name: string; age: number } = {
  name: 'Max',
  age: 34
};

const { name: myName1, age: myAge1 } = myUserData1;
console.log(myName1, myAge1);

// template literals
console.log('<< TEMPLATE LITERALS >>');

// extended strings
const userNameString = 'Andrei';
const greeting = "Hello, I'm  " + userNameString;
console.log(greeting);

const greetingLiteral = `
Hello ${userNameString} and I'm ${myAge1} age!
This is Typescript template literals.
This is a new feature.
`;
console.log(greetingLiteral);

console.log('<< EXERCISES >>');
// Exercise 1 - Maybe use an Arrow Function?
var double = (value: number): number => value * 2;
console.log(double(10));

// Exercise 2 - If only we could provide some default values...
let greet1 = function(name: string = 'Andrei') {
  if (name === undefined) {
    name = 'Max';
  }
  console.log('Hello, ' + name);
};
greet1();
greet1('Anna');

// Exercise 3 - Isn't there a shorter way to get all these Values?
let numbers1: number[] = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, [...numbers1]));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, [...numbers1]);
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log(...testResults);

// Exercise 6 - And a well-constructed object!
var scientist = { firstName: 'Will', experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);
