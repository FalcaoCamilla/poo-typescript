'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisao = void 0;
class Televisao {
    constructor() {
        this.volume = 0;
        this.canal = 0;
    }
    get Volume() {
        return this.volume;
    }
    get Canal() {
        return this.canal;
    }
}
exports.Televisao = Televisao;
