const numeros = Array.from({ length:
    100 }, (_, index) => index + 1);

    var qtdFizz = 0;
    var qtdBuzz = 0;
    var qtdFizzBuzz = 0;

const multiplos = numeros.map(numero => {
    if (numero % 3 == 0 && numero % 5 == 0) {
      console.log('FizzBuzz');
      qtdFizzBuzz++;
    } else if(numero % 3 == 0){
        console.log('Fizz');
        qtdFizz++;
    } else if(numero % 5 == 0){
        console.log('Buzz');
        qtdBuzz++;
    }else {
        console.log(numero);
    }
})
console.log(`multiplos`);
console.log(`Quantidade de Fizz: ${qtdFizz}`);
console.log(`Quantidade de Buzz: ${qtdBuzz}`);
console.log(`Quantidade de FizzBuzz: ${qtdFizzBuzz}`);