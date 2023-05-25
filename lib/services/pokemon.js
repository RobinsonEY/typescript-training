"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPokemons = void 0;
function getAllPokemons() {
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res) => { return res.json(); })
        .catch(err => { console.log(err); });
}
exports.getAllPokemons = getAllPokemons;
