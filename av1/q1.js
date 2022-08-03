'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correntista = void 0;
let msg = '';
class Correntista {
    constructor(n, cpf, dn, tel) {
        this.nome = n;
        this.cpf = cpf;
        this.dataNascimento = dn;
        this.telefone = tel;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(newCpf) {
        if ((newCpf.toString()).length == 11) {
            msg = `CPF validado com sucesso.`;
            this.cpf = newCpf;
        }
        else {
            msg = `CPF inválido.`;
        }
        return msg;
    }
}
exports.Correntista = Correntista;
