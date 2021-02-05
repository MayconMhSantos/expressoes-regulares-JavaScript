const pontoRegex = /./;  // o ponto aceita  TUDO

console.log(pontoRegex.test("asd"))
console.log(pontoRegex.test(" "))
console.log(pontoRegex.test("123"))
console.log(pontoRegex.test("asd123"))
console.log('-----------------------------------------------')

const dRegex = /\d/;  

console.log('d');
console.log(dRegex.test("asd"))
console.log(dRegex.test(" "))
console.log(dRegex.test("123"))
console.log(dRegex.test("asd123"))
console.log('-----------------------------------------------')

const sRegex = /\s/;  

console.log('s'); // espaços vazio quebra de linha
console.log(sRegex.test("asd"))
console.log(sRegex.test(" "))
console.log(sRegex.test("123"))
console.log(sRegex.test("asd123"))
console.log('-----------------------------------------------')

const wRegex = /\w/;  // so alfanumericos

console.log('w'); // numeros e letras
console.log(wRegex.test("asd"))
console.log(wRegex.test(" "))
console.log(wRegex.test("123"))
console.log(wRegex.test("asd123"))
console.log('-----------------------------------------------')

// Exemplossss na PRATICA

const dia = /\d\d/; // validando os dias
console.log(dia.test('2019'))
console.log(dia.test('2019'))
console.log(dia.test('2019'))
