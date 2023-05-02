"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.padLeft = void 0;
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
exports.padLeft = padLeft;
