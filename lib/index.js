"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_decorators_1 = require("./02_decorators");
const pokemon_1 = require("./services/pokemon");
//02_Decorators
console.log("myClassDecorator", myClassDecorator.methodDecorators());
function initData() {
    (0, pokemon_1.getAllPokemons)().then((aa) => console.log(aa));
}
initData();
const _09_records_1 = require("./09_records");
//02_Decorators
console.log("myClassDecorator", myClassDecorator.methodDecorators());
(0, _09_records_1.fillNetworkConfigs)();
