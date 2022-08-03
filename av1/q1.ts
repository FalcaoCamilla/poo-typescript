'use strict';

let msg = '';

export class Correntista{
    nome: string;
    cpf: number;
    dataNascimento: string;
    telefone: number;

    constructor(n: string, cpf: number, dn: string, tel:number){
        this.nome = n;
        this.cpf = cpf;
        this.dataNascimento = dn;
        this.telefone = tel;
    }

    getCpf(){
        return this.cpf
    }

    setCpf(newCpf: number){
        if((newCpf.toString()).length == 11){
            msg = `CPF validado com sucesso.`
            this.cpf = newCpf
        } else {
            msg = `CPF inválido.`
        }
        return msg
    }
}