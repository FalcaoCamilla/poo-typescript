'use strict';

import {Produto} from "./produto/produto";
import {Contato} from "./contato/contato";

let meuLivro: Produto = new Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1)
meuLivro.categoria = 'Livro'

console.log(meuLivro)

let contato1: Contato = new Contato('Camilla', 'millafalcao.acad@gmail.com', 84999035870)
contato1.NovoNome = 'Falcão'
contato1.NovoNum = 81999035870
console.log(contato1.Dados)