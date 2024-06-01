var notas = [8.50, 6.00, 6.00];
const mediaParaAprovar = [7.00]

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda nota é: ${notas[1]}`);
console.log(`A terceira nota é: ${notas[2]}`);

const media = (notas[0] + notas[1] + notas[2])/notas.length;
console.log(`A  sua média foi ${media.toFixed(2)}`);

if (media >= mediaParaAprovar) {
    console.log ("Você está aprovado");
} else {
    console.log ("Você está reprovado");
}