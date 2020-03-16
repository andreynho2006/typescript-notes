"use strict";
// namespaces
// console.log('<< NAMESPACE >>');
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
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
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
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
