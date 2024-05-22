"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boiler = void 0;
class Boiler {
    constructor(type, serial, password) {
        this.type = type;
        this.serial = serial;
        this.password = password;
    }
    getId() {
        return `${this.type}-${this.serial}`;
    }
}
exports.Boiler = Boiler;
