'use strict';

enum Categoria{
    ROUPA = 'Roupa',
    BRINQ = 'Brinquedo',
    LIV = 'Livro',
    ELE = 'Eletronico'
}

export class Produto{
    nome: string;
    categoria: string;
    marca: string;
    descricao: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, marca: string, descricao: string, preco: number, quantidade: number){
        this.nome = nome;
        this.categoria = Categoria.BRINQ; //colocada proposidamente a fim de alterar esse parametro na criação do objeto
        this.marca = marca;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidade = quantidade;
    }

}