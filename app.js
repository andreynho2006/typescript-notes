"use strict";
// string
var myName = 'Max';
//myName = 7  //eroor
// number
var myAge = 27; //int, float also
// myage = "Max" // Error
//boolean
var hasHobbies = true;
hasHobbies = false;
// hasHobbies = 1; // Error
// assign types
var myRealAge;
myRealAge = 27;
//myRealAge = '27'; // ERROR
// array
var hobbies = ['Cooking', 'Sport'];
//console.log(typeof hobbies[0]);
hobbies = [100];
// hobbies = 10 //Error
// tuples
var address = ['Super Street', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // 101
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor); // Color.Green = 100
// any
var car = 'BMW';
console.log(car);
car = {
    brand: 'BMW',
    series: 3
};
console.log(car);
// functions
function returnName() {
    return myName;
}
console.log(returnName());
// void
function sayHello() {
    console.log('Hello!');
    // return myAge; // ERROR
}
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
//console.log(multiply(2, "Max")); // ERROR
console.log(multiply(2, 5));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply(); ERROR
myMultiply = multiply;
console.log(myMultiply(5, 2));
// Objects
var userData = {
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
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// check types
var finalValue = 'A string';
if (typeof finalValue == 'string') {
    console.log('finalValue is a number');
}
// never (it should never be reached)
function neverReturns() {
    throw new Error('An error');
}
// Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Andrei',
    bankAccount: bankAccount,
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
