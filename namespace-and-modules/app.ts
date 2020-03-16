// namespaces
// console.log('<< NAMESPACE >>');

// import CircleMath = MyMath.Circle;

// /// <reference path="circleMath.ts" />
// /// <reference path="rectangleMath.ts" />
// const PI = 3.1415;
// console.log(MyMath.calculateRectangle(4, 5));
// console.log(CircleMath.calculateCircumference(5));
//

//interfaces
// console.log('<< INTERFACES >>');
interface Personas {
  name?: string;
  age?: number;
  [propName: string]: any;

  greet?(lastName: string): void;
}

function greetHello(person: Personas) {
  console.log('Hello ' + person.name);
}

function changeName(person: Personas) {
  person.name = 'Ana';
}

const personas = {
  name: 'Max',
  age: 34,
  hobbies: ['Cooking', 'Sports'],
  greet(lastName: string) {
    console.log('Hi, I am ' + this.name + ' ' + lastName);
  }
};

greetHello(personas);
changeName(personas);
greetHello(personas);
greetHello({ name: 'Max' });
greetHello({ name: 'Max', age: 34 });
personas.greet('Cirlan');

class Personas implements Personas {
  name?: string;
  lastName?: string;
  greet?(lastName: string) {
    console.log('Hi, I am ' + this.name + ' ' + lastName);
  }
}
const myPersonas = new Personas();
myPersonas.name = 'Andrei';
greetHello(myPersonas);
// myPersonas.greet('Anything');

// Function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(val1: number, val2: number) {
  return (val1 + val2) * 2;
};
console.log(myDoubleFunction(10, 20));

// interface inheritance
interface AgedPerson extends Personas {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  name: 'Andrei',
  greet(lastName: string) {
    console.log('Hello');
  }
};
console.log(oldPerson);

// generisc
// console.log('<< GENERICS >>');

// simple generic
function echo(data: any) {
  return data;
}

console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Max', gase: 34 }));

// better generic way
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', gase: 34 }));

// built-in generic
//array
const testResult: Array<number> = [1.94, 2.33];
testResult.push(34.7);
//testResult.push('cinci');
console.log(testResult);

// arrays
function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}
printAll<string>(['Apple', 'Banana']);

// generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Something'));

// Generic classes
class SimpleMath<T extends number | string, U extends number | string> {
  constructor(public baseValue: T, public multiplyValue: U) {}

  calculate(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath<string, number>('0', 0);
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 10;
console.log(simpleMath.calculate());

//Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

// Let's keep it simple and only add the following methods to the Map:
class MyMap<T> {
  private map: { [key: string]: T } = {};

  setItem(key: string, item: T) {
    this.map[key] = item;
  }
  getItem(key: string) {
    return this.map[key];
  }
  clear() {
    this.map = {};
  }
  printMap() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

//The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();

// Decorators
console.log('<< DECORATORS >>');

//decorator
function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Pers {
  constructor() {
    console.log('Hy');
  }
}

// decorator factory
function logging(value: boolean) {
  return value ? logged : undefined;
}

// @logging(false)
class Cars {
  constructor() {
    console.log('Factories decorator true');
  }
}

// advanced decorators
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}
// using multiple decorators
//@logging(true)
@logged
@printable
class Planta {
  name = 'Green plant';
}
const planta = new Planta();
(<any>planta).print();

// Method decorators
// Property decorators
// factory
function editable(value: boolean) {
  return function(
    target: any,
    propName: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = value;
  };
}

function overwritable(value: boolean): any {
  return function(target: any, propName: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Projects {
  @overwritable(true)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }
  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project = new Projects('Super project');
project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// };
project.calcBudget();
console.log(project);

// Parameter decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target ', target);
  console.log('Method Name ', methodName);
  console.log('Param index ', paramIndex);
}

class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printstudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(100000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course('Decorators');
course.printstudentNumbers('anything', true);
course.printstudentNumbers('anything', false);
