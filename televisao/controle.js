'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = void 0;
class Controle {
    constructor(tv) {
        this.VOLUME_MAXIMO = 100;
        this.CANAL_MAXIMO = 800;
        this.tv = tv;
    }
    get Volume() {
        return this.tv.volume;
    }
    get Canal() {
        return this.tv.canal;
    }
    set MudaCanal(canal) {
        this.tv.canal = canal;
    }
    AumentaVol() {
        if (this.Volume <= this.VOLUME_MAXIMO) {
            return this.tv.volume++;
        }
        else {
            return this.tv.volume = 100;
        }
    }
    DiminuiVol() {
        if (this.Volume > 0) {
            return this.tv.volume--;
        }
        else {
            return this.tv.volume = 0;
        }
    }
    AumentaCanal() {
        if (this.Canal >= 0 && this.Canal <= this.CANAL_MAXIMO) { //canal >= 0 não seria necessário, pois tv já recebe canal = 0 como padrão
            return this.tv.canal++;
        }
        else {
            return this.tv.canal = 0;
        }
    }
    DiminuiCanal() {
        if (this.Canal > 0 && this.Canal <= this.CANAL_MAXIMO) {
            return this.tv.canal--;
        }
        else {
            return this.tv.canal = 0;
        }
    }
}
exports.Controle = Controle;
