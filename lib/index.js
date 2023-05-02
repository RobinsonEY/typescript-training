"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_decorators_1 = require("./02_decorators");
//02_Decorators
let myClassDecorator = new _02_decorators_1.MyClassDecorator('tipo');
console.log("myClassDecorator", myClassDecorator.methodDecorators());
