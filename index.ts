'use strict';

import {Produto} from "./produto";

let meuLivro: Produto = new Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1)
meuLivro.categoria = 'Livro'

console.log(meuLivro)