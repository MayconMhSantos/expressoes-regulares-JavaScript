const validarDataNasc = /[0-31]{2}[/][0-12]{2}[/][1920-2020]{4}/;

console.log(validarDataNasc.test("05/02/2020"))
console.log(validarDataNasc.test("5/02/2020"))
console.log(validarDataNasc.test("5/2/2020"))
console.log(validarDataNasc.test("05/02/20"))