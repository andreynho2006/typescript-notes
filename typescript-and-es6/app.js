"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// let & const
console.log('<< LET & CONST >>');
var variable = 'Test';
// let is block scoped
console.log(variable);
variable = 'Another value';
// const
var maxLevels = 100;
console.log(maxLevels);
// cannot reassign a constant
// maxLevels = 99;
// block scope
function reset() {
    //console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow function
console.log('<< ARROW FUNCTION >>');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(3, 2));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(3, 5));
var greet = function () {
    console.log('Hello!');
};
greet();
var greetFriend = function (friendName) {
    console.log('Hello ' + friendName);
};
greetFriend('Simona');
// default parameters
console.log('<< DEFAULT PARAMETERS >>');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('Done ', start);
};
countdown(20);
// rest & spread operator
console.log('<< REST & SPREAD OPRATOR>>');
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 55, 7, -4));
console.log(Math.max.apply(Math, numbers)); //spread operator
function makeArray(args1, args2) {
    return [args1, args2];
}
console.log(makeArray(1, 2));
function makeArray2(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    //rest operator
    return args;
}
console.log(makeArray2('Max', 1, 2, 3, 4));
// destructuring
console.log('<< DESTRUCTURING >>');
var myHobbies = ['Cooking', 'Sports'];
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log(myHobbies[0], myHobbies[1]);
console.log(hobby1, hobby2);
var hobby11 = myHobbies[0], hobby22 = myHobbies[1];
console.log(hobby11, hobby22);
var myUserData = {
    userName: 'Max',
    age: 32
};
var userName = myUserData.userName;
var userAge = myUserData.age;
console.log(userName, userAge);
var myUserData1 = {
    name: 'Max',
    age: 34
};
var myName1 = myUserData1.name, myAge1 = myUserData1.age;
console.log(myName1, myAge1);
// template literals
console.log('<< TEMPLATE LITERALS >>');
// extended strings
var userNameString = 'Andrei';
var greeting = "Hello, I'm  " + userNameString;
console.log(greeting);
var greetingLiteral = "\nHello " + userNameString + " and I'm " + myAge1 + " age!\nThis is Typescript template literals.\nThis is a new feature.\n";
console.log(greetingLiteral);
console.log('<< EXERCISES >>');
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet1 = function (name) {
    if (name === void 0) { name = 'Andrei'; }
    if (name === undefined) {
        name = 'Max';
    }
    console.log('Hello, ' + name);
};
greet1();
greet1('Anna');
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, __spreadArrays(numbers1)));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, __spreadArrays(numbers1));
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0];
var result2 = testResults[1];
var result3 = testResults[2];
console.log.apply(console, testResults);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: 'Will', experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
