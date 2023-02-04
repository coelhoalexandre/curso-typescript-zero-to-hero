exports = {};
// ==> Exemplo 01 - Interfaces com extends

interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;

}



interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Prince',
  idade: 2,
  porte: 'Médio',
  raca: 'Splitz Alemão'
}

console.log(cachorro);

// ==> Exemplo 02 - Extensão de Múltiplas Interfaces

interface Cachorro {
  nome: string;
  raca: string;
}
interface Gato {
  nome: string;
  cor: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Farofa',
  raca: 'Pincher',
  cor: 'Marrom',
  idade: 5,
}

console.log(animal);

// ==> Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id'> {
  id: string;
  linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Glaucia Lemos',
  salario: 10000,
  linguagemProgramacao: 'JavaScript',
}

console.log(desenvolvedor);
