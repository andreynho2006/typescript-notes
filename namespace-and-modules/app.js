"use strict";
// namespaces
// console.log('<< NAMESPACE >>');
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function greetHello(person) {
    console.log('Hello ' + person.name);
}
function changeName(person) {
    person.name = 'Ana';
}
var personas = {
    name: 'Max',
    age: 34,
    hobbies: ['Cooking', 'Sports'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    }
};
greetHello(personas);
changeName(personas);
greetHello(personas);
greetHello({ name: 'Max' });
greetHello({ name: 'Max', age: 34 });
personas.greet('Cirlan');
var Personas = /** @class */ (function () {
    function Personas() {
    }
    Personas.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.name + ' ' + lastName);
    };
    return Personas;
}());
var myPersonas = new Personas();
myPersonas.name = 'Andrei';
greetHello(myPersonas);
var myDoubleFunction;
myDoubleFunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    name: 'Andrei',
    greet: function (lastName) {
        console.log('Hello');
    }
};
console.log(oldPerson);
// generisc
// console.log('<< GENERICS >>');
// simple generic
function echo(data) {
    return data;
}
console.log(echo('Max').length);
console.log(echo(27));
console.log(echo({ name: 'Max', gase: 34 }));
// better generic way
function betterEcho(data) {
    return data;
}
console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', gase: 34 }));
// built-in generic
//array
var testResult = [1.94, 2.33];
testResult.push(34.7);
//testResult.push('cinci');
console.log(testResult);
// arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(['Apple', 'Banana']);
// generic types
var echo2 = betterEcho;
console.log(echo2('Something'));
// Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath(baseValue, multiplyValue) {
        this.baseValue = baseValue;
        this.multiplyValue = multiplyValue;
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath('0', 0);
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 10;
console.log(simpleMath.calculate());
//Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.
// Let's keep it simple and only add the following methods to the Map:
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
//The map should be usable like shown below:
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', 'Max');
stringMap.setItem('age', '27');
stringMap.printMap();
// Decorators
console.log('<< DECORATORS >>');
//decorator
function logged(constructorFn) {
    console.log(constructorFn);
}
var Pers = /** @class */ (function () {
    function Pers() {
        console.log('Hy');
    }
    Pers = __decorate([
        logged
    ], Pers);
    return Pers;
}());
// decorator factory
function logging(value) {
    return value ? logged : undefined;
}
// @logging(false)
var Cars = /** @class */ (function () {
    function Cars() {
        console.log('Factories decorator true');
    }
    return Cars;
}());
// advanced decorators
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// using multiple decorators
//@logging(true)
var Planta = /** @class */ (function () {
    function Planta() {
        this.name = 'Green plant';
    }
    Planta = __decorate([
        logged,
        printable
    ], Planta);
    return Planta;
}());
var planta = new Planta();
planta.print();
// Method decorators
// Property decorators
// factory
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Projects = /** @class */ (function () {
    function Projects(name) {
        this.projectName = name;
    }
    Projects.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Projects.prototype, "projectName", void 0);
    __decorate([
        editable(false)
    ], Projects.prototype, "calcBudget", null);
    return Projects;
}());
var project = new Projects('Super project');
project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// };
project.calcBudget();
console.log(project);
// Parameter decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target ', target);
    console.log('Method Name ', methodName);
    console.log('Param index ', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printstudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(100000);
        }
        else {
            console.log(2000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printstudentNumbers", null);
    return Course;
}());
var course = new Course('Decorators');
course.printstudentNumbers('anything', true);
course.printstudentNumbers('anything', false);
