// ==> Exemplo 01: Tipo Unknown

let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

console.log(valorVariavel);

// ===> Exemplo 02: Erro ao tentar atribuir um valor do tipo 'unknown' a outros tipos!

/*
let valor: unknown;

let valor1: boolean = valor; // Erro
let valor2: any = valor;  // Erro
let valor3: any[] = valor;  // Erro
let valor4: string = valor;  // Erro
*/

// ===> Exemplo 03: diferença entre: 'any' vs 'unknown'

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

//console.log(algumaCoisaUnknown.toFixed()); // Erro, pois ele espera um valor númerico

if(typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}