export { };

// ==> Exemplo 01 - Type Casting: as

const nome_01: unknown = 'Glaucia Lemos';
console.log((nome_01 as string).toUpperCase());

/*
const nome_02: unknown = 36;
console.log((nome_02 as string).toUpperCase()); // Erro
*/

// ==> Exemplo 02 - Type Casting: <>

const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é:', tamanhoString);