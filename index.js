'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./produto");
const contato_1 = require("./contato");
let meuLivro = new produto_1.Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1);
meuLivro.categoria = 'Livro';
console.log(meuLivro);
let contato1 = new contato_1.Contato('Camilla', 'millafalcao.acad@gmail.com', 84999035870);
contato1.NovoNome = 'Falcão';
contato1.NovoNum = 81999035870;
console.log(contato1.Dados);
