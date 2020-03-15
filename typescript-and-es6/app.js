"use strict";
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
//
