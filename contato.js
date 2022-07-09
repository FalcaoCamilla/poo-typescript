'use strict';
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Contato_nome, _Contato_email, _Contato_telefone;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contato = void 0;
class Contato {
    constructor(nome, email, telefone) {
        _Contato_nome.set(this, void 0);
        _Contato_email.set(this, void 0);
        _Contato_telefone.set(this, void 0);
        __classPrivateFieldSet(this, _Contato_nome, nome, "f");
        __classPrivateFieldSet(this, _Contato_email, email, "f");
        __classPrivateFieldSet(this, _Contato_telefone, telefone, "f");
    }
    get Dados() {
        const dados = [];
        dados.push(__classPrivateFieldGet(this, _Contato_nome, "f"));
        dados.push(__classPrivateFieldGet(this, _Contato_email, "f"));
        dados.push(__classPrivateFieldGet(this, _Contato_telefone, "f"));
        return dados;
    }
    set NovoNome(nome) {
        __classPrivateFieldSet(this, _Contato_nome, nome, "f");
    }
    set NovoEmail(email) {
        __classPrivateFieldSet(this, _Contato_email, email, "f");
    }
    set NovoNum(numero) {
        __classPrivateFieldSet(this, _Contato_telefone, numero, "f");
    }
}
exports.Contato = Contato;
_Contato_nome = new WeakMap(), _Contato_email = new WeakMap(), _Contato_telefone = new WeakMap();
