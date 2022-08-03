'use strict';

import { Correntista } from "./q1";
import { Conta } from "./q2";

let Camilla:Correntista = new Correntista('Camilla', 13095121407, '06/01/2003', 999035870)

let Conta1:Conta = new Conta(10, Camilla);

console.log(Camilla);
console.log(Camilla.getCpf())
Camilla.setCpf(1309512140);
console.log(Camilla.setCpf(1309512140));
console.log(Camilla.setCpf(13095121408));
console.log(Camilla.getCpf())

console.log(Conta1)
console.log(Conta1.getSaldo());
console.log(Conta1.temSaldo());
Conta1.depositar(1200);
console.log(Conta1.getSaldo());
console.log(Conta1.temSaldo());
Conta1.debitar(323.54)
console.log(Conta1.getSaldo());