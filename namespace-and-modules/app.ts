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
