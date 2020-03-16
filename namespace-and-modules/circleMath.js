"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.1415;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
