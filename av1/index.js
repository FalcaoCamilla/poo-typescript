'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const q1_1 = require("./q1");
const q2_1 = require("./q2");
let Camilla = new q1_1.Correntista('Camilla', 13095121407, '06/01/2003', 999035870);
let Conta1 = new q2_1.Conta(10, Camilla);
console.log(Camilla);
console.log(Camilla.getCpf());
Camilla.setCpf(1309512140);
console.log(Camilla.setCpf(1309512140));
console.log(Camilla.setCpf(13095121408));
console.log(Camilla.getCpf());
console.log(Conta1);
console.log(Conta1.getSaldo());
console.log(Conta1.temSaldo());
Conta1.depositar(1200);
console.log(Conta1.getSaldo());
console.log(Conta1.temSaldo());
Conta1.debitar(323.54);
console.log(Conta1.getSaldo());
