console.log('<< CLASSES >>');

class Person {
  private type: string;
  protected age: number = 25;

  constructor(public name: string, public username: string) {}
  setAge(age: number) {
    this.age = age;
  }
  printAge() {
    console.log(this.age);
    this.age < 30 ? this.setType('Young guy!') : this.setType('Old guy!');
  }
  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Andrei', 'andreynho');
console.log(person);
person.setAge(27);
person.printAge();
person.setAge(99);
person.printAge();

// Inheritance
console.log('<< INHERIT?ANCE >>');

class Simona extends Person {
  constructor(username: string) {
    super('Simona', username);
    this.age = 33;
  }
}
const sim = new Simona('simonica');
console.log(sim);
sim.printAge();

// Getters & Setters
console.log('<< GETTERS & SETTERS >>');

class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}
let plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// Static properties & methods
console.log('<< STATIC PROPERTIES & METHODS >>');

class Helpers {
  static PI: number = 3.141516;
  static calcCircumferince(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferince(4));

// Abstract classes
console.log('<< ABSTRACT CLASSES >>');

// must be inherited from
abstract class Project {
  projectName: string = 'Default project';
  budget: number = 1000;

  abstract changeName(projectName: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  constructor() {
    super();
  }
  changeName(projectName: string): void {
    this.projectName = projectName;
  }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT project');
console.log(newProject);

// private constructors
class OnlyOne {
  private static instance: OnlyOne;
  public readonly nume: string;

  private constructor(name: string) {
    this.nume = name;
  }

  static getInstance() {
    if (OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

//let wrong = new OnlyOne('the Only One');
// singleton
let right = OnlyOne.getInstance();
//console.log(right.nume);
//

console.log('<< EXERCISES >>');

// Exercise 1 - How was your TypeScript Class?
class Car {
  name: string;
  acceleration: number = 0;
  constructor(public name: string) {
    this.name = name;
  }

  honk() {
    console.log('Toooooooooot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}
var car1 = new Car('BMW');
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
  width = 0,
  length = 0
};

class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person1 {
  private _firstName: string = 'Andrei';

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}
let person1 = new Person1();
console.log(person1.firstName);
person1.firstName = 'Ma';
console.log(person1.firstName);
person1.firstName = 'Maximilian';
console.log(person1.firstName);
