'use strict';

import {Produto} from "./produto/produto";
import {Contato} from "./contato/contato";
import {Controle} from "./televisao/controle";
import {Televisao} from "./televisao/televisao";

let meuLivro: Produto = new Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1)
meuLivro.categoria = 'Livro'

console.log(meuLivro)

let contato1: Contato = new Contato('Camilla', 'millafalcao.acad@gmail.com', 84999035870)
contato1.NovoNome = 'Falcão'
contato1.NovoNum = 81999035870
console.log(contato1.Dados)

var televisao1 = new Televisao(0,0)
var controle = new Controle(televisao1)

console.log(controle.Volume) //0
controle.AumentaVol() 
controle.AumentaVol() 
controle.DiminuiVol() 
console.log(controle.Volume) //1

console.log(controle.Canal) //0
controle.AumentaCanal()
controle.AumentaCanal()
console.log(controle.Canal) //2

controle.MudaCanal = 23
console.log(controle.Canal) //23
controle.AumentaCanal()
console.log(controle.Canal) //24