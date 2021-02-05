const validarEmail = /\w+@\w+\.\w+/;   // Regex para Validar Email

console.log(validarEmail.test("maycon@gmail.com"));
console.log(validarEmail.test("maycon@gmail"));
console.log(validarEmail.test("gmail.com"));
console.log(validarEmail.test("gmail@gmail.gmail"));



