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

//
