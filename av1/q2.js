'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(n, correntista) {
        this.numero = n;
        this.saldo = 0;
        this.correntista = correntista;
    }
    getSaldo() {
        return this.saldo;
    }
    temSaldo() {
        if (this.saldo >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    depositar(n) {
        if (this.temSaldo()) {
            this.saldo = this.saldo + n;
            return true;
        }
        else {
            return false;
        }
    }
    debitar(n) {
        if (this.temSaldo()) {
            this.saldo = this.saldo - n;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Conta = Conta;
