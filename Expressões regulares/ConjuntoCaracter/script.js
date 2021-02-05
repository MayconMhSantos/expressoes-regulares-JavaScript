// console.log(/[123]/.test('Existe 123 aqui'))
// console.log(/[123]/.test('Existe 321 aqui'))

const reg1 = /[12345]/; // nao e  bom usar e muito  mal elaborada para resgatar os valores
console.log(reg1.test('tem o numero 12345'))
console.log(reg1.test('tem o numero 12'))
console.log(reg1.test('tem o numero 45'))
console.log(reg1.test('tem o numero 1'))
console.log(reg1.test('tem o numero 90'))

console.log('-----------------------------------------------')

const reg2 = /[0-9]/;
console.log(reg2.test('tem o numero 1213454513654612345'))
console.log(reg2.test('tem o numero 1'))

console.log('-----------------------------------------------')

const reg3 = /[0-7]/;
console.log(reg3.test('tem o numero 8989898989'))