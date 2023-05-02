"use strict";
// "experimentalDecorators": true
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyClassDecorator = void 0;
/* #region Class Decorators */
function addParameters(name) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.name = name;
            }
        };
    };
}
/* #endregion */
/* #region Function Decorators */
function measureTime(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.time(`Execution time: ${propertyName}`);
        const result = originalMethod.apply(this, args);
        console.timeEnd(`Execution time: ${propertyName}`);
        return result;
    };
    return descriptor;
}
/* #endregion */
let MyClassDecorator = class MyClassDecorator {
    constructor(tipo) {
        this.tipo = tipo;
    }
    methodDecorators() {
        for (let i = 0; i < 10000; i++) {
        }
    }
};
__decorate([
    measureTime
], MyClassDecorator.prototype, "methodDecorators", null);
MyClassDecorator = __decorate([
    addParameters('miNombre')
], MyClassDecorator);
exports.MyClassDecorator = MyClassDecorator;
