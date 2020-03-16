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
