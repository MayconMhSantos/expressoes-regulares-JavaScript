const ceep = /\d{5}-\d{3}/;   // Valida se o valor setado vai corresponder a 5 digitos apos o traso mais 3 digitos, se sim True

console.log(ceep.test("85807-230")) //TRUE
console.log(ceep.test("5807-230")) //False
  


const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(45)44444-4444"));