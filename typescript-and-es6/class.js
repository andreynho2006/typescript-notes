"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('<< CLASSES >>');
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        this.age = 25;
    }
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.age < 30 ? this.setType('Young guy!') : this.setType('Old guy!');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Andrei', 'andreynho');
console.log(person);
person.setAge(27);
person.printAge();
person.setAge(99);
person.printAge();
// Inheritance
console.log('<< INHERIT?ANCE >>');
var Simona = /** @class */ (function (_super) {
    __extends(Simona, _super);
    function Simona(username) {
        var _this = _super.call(this, 'Simona', username) || this;
        _this.age = 33;
        return _this;
    }
    return Simona;
}(Person));
var sim = new Simona('simonica');
console.log(sim);
sim.printAge();
// Getters & Setters
console.log('<< GETTERS & SETTERS >>');
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'ab';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// Static properties & methods
console.log('<< STATIC PROPERTIES & METHODS >>');
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumferince = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.141516;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumferince(4));
// Abstract classes
console.log('<< ABSTRACT CLASSES >>');
// must be inherited from
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default project';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super.call(this) || this;
    }
    ITProject.prototype.changeName = function (projectName) {
        this.projectName = projectName;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT project');
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.nume = name;
    }
    OnlyOne.getInstance = function () {
        if (OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('the Only One');
// singleton
var right = OnlyOne.getInstance();
//console.log(right.nume);
//
console.log('<< EXERCISES >>');
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car1 = new Car('BMW');
car1.honk();
console.log(car1.acceleration);
car1.accelerate(10);
console.log(car1.acceleration);
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person1 = /** @class */ (function () {
    function Person1() {
        this._firstName = 'Andrei';
    }
    Object.defineProperty(Person1.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person1;
}());
var person1 = new Person1();
console.log(person1.firstName);
person1.firstName = 'Ma';
console.log(person1.firstName);
person1.firstName = 'Maximilian';
console.log(person1.firstName);
