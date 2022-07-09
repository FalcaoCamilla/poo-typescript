'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./produto");
let meuLivro = new produto_1.Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1);
meuLivro.categoria = 'Livro';
console.log(meuLivro);
