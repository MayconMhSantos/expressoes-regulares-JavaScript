const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test(' ')); // nao aceita vazio FALSE
console.log(umOuMaisNumeros.test('123456')); // so aceita Numeros TRUE
console.log(umOuMaisNumeros.test('Nao aceira Strings')); //FALSE
