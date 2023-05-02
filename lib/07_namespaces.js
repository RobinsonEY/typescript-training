"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameSpace2 = exports.NameSpace1 = void 0;
var NameSpace1;
(function (NameSpace1) {
    class ClassA {
        constructor(propertyA) {
            this.propertyA = propertyA;
        }
    }
    NameSpace1.ClassA = ClassA;
})(NameSpace1 = exports.NameSpace1 || (exports.NameSpace1 = {}));
var NameSpace2;
(function (NameSpace2) {
    class ClassA {
        constructor(propertyB, propertyC) {
            this.propertyB = propertyB;
            this.propertyC = propertyC;
        }
    }
    NameSpace2.ClassA = ClassA;
})(NameSpace2 = exports.NameSpace2 || (exports.NameSpace2 = {}));
