const validaDominio = /?www.\w+\.com|.com/;   // ? < opcional          || < ou 

console.log(validaDominio.test("www.google.com"))
console.log(validaDominio.test("www.google.com.br"))
console.log(validaDominio.test("www.horadecodar"))
console.log(validaDominio.test("horadecodar"))
console.log(validaDominio.test("horadecodar.com"))


