'use strict'

import { Correntista } from "./q1";

export class Conta {
    numero: number;
    saldo: number;
    correntista: Correntista;

    constructor(n: number, correntista:Correntista){
        this.numero = n;
        this.saldo = 0;
        this.correntista = correntista;
    }

    getSaldo(){
        return this.saldo
    }

    temSaldo(){
        return this.saldo >= 0
    }

    depositar(n: number){
        if (this.temSaldo()){
            this.saldo = this.saldo + n;
            return true
        } else {
            return false
        }
    }

    debitar(n: number){
        if (this.temSaldo()){
            this.saldo = this.saldo - n;
            return true
        } else {
            return false
        }
    }    
}