export { };

// ==> Exemplo 01 - Classes

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

const pessoa = new Pessoa("Glaucia", "Lemos");
console.log(pessoa.nomeCompleto());

// ==> Exemplo 02 - Classes (sem constructor)

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 8967;
estudante.nomeEstudante = 'Prince Lemos';

console.log('Código do Estudante:' + estudante.codigoEstudante);
console.log('Nomde do Estudante:' + estudante.nomeEstudante);

// ==> Exemplo 03 - Classes (com constructor)

class Estudante_1 {
    codigoEstudante: number;
    nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    listarEstudante(): void {
        console.log('Código do Estudante: ' + this.codigoEstudante);
        console.log('Nome do Estudante: ' + this.nomeEstudante);
    }
}

const estudante_1 = new Estudante_1(9845, 'Prince Lemos');
estudante_1.listarEstudante();