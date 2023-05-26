"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_1 = require("./services/pokemon");
const _09_records_1 = require("./09_records");
function initData() {
    console.log("Execute");
    const response = () => __awaiter(this, void 0, void 0, function* () { yield (0, pokemon_1.getAllPokemons)().then((aa) => console.log(aa)); });
    console.log("response", response);
}
initData();
(0, _09_records_1.fillNetworkConfigs)();
