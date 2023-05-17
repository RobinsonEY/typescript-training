"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_decorators_1 = require("./02_decorators");
const _09_records_1 = require("./09_records");
//02_Decorators
let myClassDecorator = new _02_decorators_1.MyClassDecorator('tipo');
console.log("myClassDecorator", myClassDecorator.methodDecorators());
(0, _09_records_1.fillNetworkConfigs)();
