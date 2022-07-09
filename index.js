'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("./produto/produto");
const contato_1 = require("./contato/contato");
const controle_1 = require("./televisao/controle");
const televisao_1 = require("./televisao/televisao");
let meuLivro = new produto_1.Produto('Origem', 'Editora X - Dan Brown', 'Origem - 360 páginas', 63, 1);
meuLivro.categoria = 'Livro';
console.log(meuLivro);
let contato1 = new contato_1.Contato('Camilla', 'millafalcao.acad@gmail.com', 84999035870);
contato1.NovoNome = 'Falcão';
contato1.NovoNum = 81999035870;
console.log(contato1.Dados);
var televisao1 = new televisao_1.Televisao();
var controle = new controle_1.Controle(televisao1);
console.log(controle.Volume); //0
controle.AumentaVol();
controle.AumentaVol();
controle.DiminuiVol();
console.log(controle.Volume); //1
console.log(controle.Canal); //0
controle.AumentaCanal();
controle.AumentaCanal();
console.log(controle.Canal); //2
controle.MudaCanal = 23;
console.log(controle.Canal); //23
controle.AumentaCanal();
console.log(controle.Canal); //24
