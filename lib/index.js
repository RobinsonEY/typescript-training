"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _02_decorators_1 = require("./02_decorators");
const pokemon_1 = require("./services/pokemon");
//02_Decorators
let myClassDecorator = new _02_decorators_1.MyClassDecorator('tipo');
console.log("myClassDecorator", myClassDecorator.methodDecorators());
function initData() {
    (0, pokemon_1.getAllPokemons)().then((aa) => console.log(aa));
}
initData();
