"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaGenerica = void 0;
class ListaGenerica {
    constructor() {
        this.elementos = new Array();
        this.capacidad = 0;
    }
    agregar(elemento) {
        this.elementos[this.capacidad++] = elemento;
    }
    obtener(indice) {
        if (indice < 0 || indice >= this.capacidad) {
            throw new Error("Índice fuera de rango");
        }
        return this.elementos[indice];
    }
    dimension() {
        return this.capacidad;
    }
}
exports.ListaGenerica = ListaGenerica;
