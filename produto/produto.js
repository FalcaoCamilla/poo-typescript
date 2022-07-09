'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
var Categoria;
(function (Categoria) {
    Categoria["ROUPA"] = "Roupa";
    Categoria["BRINQ"] = "Brinquedo";
    Categoria["LIV"] = "Livro";
    Categoria["ELE"] = "Eletronico";
})(Categoria || (Categoria = {}));
class Produto {
    constructor(nome, marca, descricao, preco, quantidade) {
        this.nome = nome;
        this.categoria = Categoria.BRINQ; //colocada proposidamente a fim de alterar esse parametro na criação do objeto
        this.marca = marca;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
exports.Produto = Produto;
