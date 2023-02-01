// ==> Exemplo 01: Tipo Any

const a: any = 17;
const b: any = ['Alexandre', 'Coelho'];

const result = a + b;
console.log(result);

// ==> Exemplo 02: Quando o tipo 'any' é inferido implícitamente

/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// ==> Exemplo 03: Quando devemos usar o tipo any?!

const formulario: {[campoFormulario: string]: any} = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 34,
};

console.log(formulario);