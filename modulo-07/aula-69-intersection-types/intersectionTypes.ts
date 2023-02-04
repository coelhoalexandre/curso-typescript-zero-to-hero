export = {};

// ==> Exemplo 01 - Intersection Types:

interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 12346,
  agencia: 123,
  banco: 'Banco do Brasil',
  nome: 'Glaucia Lemos',
  email: 'glauica@email.com',
  cpf: 123456789,
}

console.log(dadosCliente);

