// ==> Exemplo 01: Never - Throw Exception

import { CompletionTriggerKind } from "typescript";

function error(message: string): never {
  throw new Error(message)
}

console.log(error('Erro de mensagem - 01'));

// ==> Exemplo 02: Never inferido automaticamente

function rejectMessage() { // Automaticamente ele interpreta que é um never
  return error('Erro de Mensagem - 02');
}

console.log(rejectMessage());

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop() {
  while(true) {
    console.log('Oi, Developers!');
  }
};

// console.log(loopInfinito()); // Vai travar a maquina

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const algumaCoisaVoid: void = null;

//const algumaCoisaNever: never = null;

console.log(algumaCoisaVoid);

//console.log(algumaCoisaNever); // Vai travar a maquina