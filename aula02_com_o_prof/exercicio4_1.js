let pessoa = {
    nome: "Luiz",
    cpf: "123.123.123-45",
    cidade: "João Pessoa",
    notas: [8.50, 9.25, 10.00, 7.08]

};
const notaaleatoria = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];

console.log(`Nome: ${pessoa.nome}\n CPF: ${pessoa.cpf}\n Cidade: ${pessoa.cidade}\n Notas: ${pessoa.notas}  `);
console.log(`Nota 1: ${pessoa.notas[0]}`);
console.log(`Nota 2: ${pessoa.notas[1]}`);
console.log(`Nota 3: ${pessoa.notas[2]}`);
console.log(`Nota 4: ${pessoa.notas[3]}`);

const media = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3])/ pessoa.notas.length;

const notaAleatoria = pessoa.notas[Math.floor(Math.random() * pessoa.notas.length)];

const notaConvertida = notaAleatoria * 10;
console.log(`A nota sorteada foi: ${notaAleatoria} e convertida pra a escala  de 0-100 é: ${notaConvertida}`);