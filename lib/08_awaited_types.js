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
const _05_conditional_types_1 = require("./05_conditional_types");
function getAllClass() {
    return __awaiter(this, void 0, void 0, function* () {
        const responsGetAllClassA = yield getAllClassA();
        const responsGetAllClassB = yield getAllClassB();
        return [...responsGetAllClassA, ...responsGetAllClassB];
    });
}
function getAllClassA() {
    return __awaiter(this, void 0, void 0, function* () {
        let listClaseA = new Array();
        for (let index = 0; index < 10; index++) {
            const element = new _05_conditional_types_1.ClaseA({ contenido: index.toString(), nombre: index.toString() });
            listClaseA.push(element);
        }
        return listClaseA;
    });
}
function getAllClassB() {
    return __awaiter(this, void 0, void 0, function* () {
        let listClaseA = new Array();
        for (let index = 0; index < 10; index++) {
            const element = new _05_conditional_types_1.ClaseB({ contenido: index, nombre: index.toString() });
            listClaseA.push(element);
        }
        return listClaseA;
    });
}
