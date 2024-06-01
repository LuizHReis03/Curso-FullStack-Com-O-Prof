const temperaturas = [10, 20, 30, 40];

console.log(`As temperaturas são: ${temperaturas}`);

console.log(`A primeira temperatura é: ${temperaturas[0]}º`);
console.log(`A segunda temperatura é: ${temperaturas[1]}º`);
console.log(`A terceira temperatura é: ${temperaturas[2]}º`);
console.log(`A quarta temperatura é: ${temperaturas[3]}º`);

const temperaturaAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

const temperaturaF = ((temperaturaAleatoria * 9/5) + 32);

console.log(`A temperatura em celsius sorteada foi ${temperaturaAleatoria}º e convertendo em Fahrenheit fica: ${temperaturaF} F`);


