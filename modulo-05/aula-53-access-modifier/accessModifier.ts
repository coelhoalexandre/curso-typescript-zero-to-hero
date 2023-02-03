export {};

// ==> Exemplo 01- Modificador: public

class Estudante {

  codigoEstudante: number; // Public
  nomeEstudante: string; // Public

}

const estudante = new Estudante();
estudante.codigoEstudante = 201;
estudante.nomeEstudante = 'Glaucia Lemos';

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// ==> Exemplo 02 - Modificador: private

class Estudante_2 {

  codigoEstudante: number; // Public
  nomeEstudante: string; // Public
  private idade: number;

  constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
    this.idade = idade;
  }

  retornarDadosEstudante() {
    return `Código do Aluno: ${this.codigoEstudante}.
Nome do Estudante: ${this.nomeEstudante}.
Idade do Estudante: ${this.idade}.`;
  }
}

const estudante_2 = new Estudante_2(98765, 'Glaucia Lemos', 35);
console.log(estudante_2.retornarDadosEstudante());


// ==> Exemplo 03 - Modificador: protected

class Estudante_3 {

  codigoEstudante: number; // Public
  protected nomeEstudante: string;

  constructor(codigoEstudante: number, nomeEstudante: string) {

    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;

  }

}

class Pessoa extends Estudante_3 {
  private curso: string;

  constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
    super(codigoEstudante, nomeEstudante);
    this.curso = curso;
  }

  retornarDadosAluno() {
    return `Código do Aluno: ${this.codigoEstudante}.
Nome do Estudante: ${this.nomeEstudante}.
Curso do Estudante: ${this.curso}.`;
  }
}

const estudante_3 = new Pessoa(112233, 'Glaucia Lemos', 'Matematica');
console.log(estudante_3.retornarDadosAluno());