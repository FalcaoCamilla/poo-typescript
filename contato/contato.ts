'use strict';

export class Contato{
    #nome: string;
    #email: string;
    #telefone: number;

    constructor(nome: string, email: string, telefone: number){
        this.#nome = nome;
        this.#email = email;
        this.#telefone = telefone;
    }

    get Dados(){
        const dados = [];
        dados.push(this.#nome);
        dados.push(this.#email);
        dados.push(this.#telefone);
        return dados
    }

    set NovoNome(nome: string){
        this.#nome = nome;
    }

    set NovoEmail(email: string){
        this.#email = email;
    }

    set NovoNum(numero: number){
        this.#telefone = numero;
    }
}