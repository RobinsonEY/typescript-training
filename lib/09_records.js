"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillNetworkConfigs = void 0;
function fillNetworkConfigs() {
    let listNetConfigs = {};
    for (let index = 0; index < 5; index++) {
        listNetConfigs[index] = {
            name: "Win" + index.toString(),
            price: index.toString(),
        };
    }
    return listNetConfigs;
}
exports.fillNetworkConfigs = fillNetworkConfigs;
