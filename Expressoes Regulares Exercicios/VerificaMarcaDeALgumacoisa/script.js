const validarMarca = /\w+: (Nike|Adidas|Puma|Asics)/;
const validarMarca2 = /\Marca: (Nike|Adidas|Puma|Asics)/;


console.log(validarMarca.test("Marca: Nike"))
console.log(validarMarca.test("Marca: Nake"))
console.log(validarMarca.test("Marca: Adidas"))
console.log(validarMarca.test("Marca: hello"))
console.log(validarMarca.test("Marca: Puma"))
console.log(validarMarca.test("Marca: Asics"))
console.log(validarMarca.test("Marca: hello"))
console.log(validarMarca.test("Marca: hello"))

console.log("-------------------------------")

console.log(validarMarca2.test("Marca: Nike"))
console.log(validarMarca2.test("Marca: Nake"))
console.log(validarMarca2.test("Marca: Adidas"))
console.log(validarMarca2.test("Marca: hello"))
console.log(validarMarca2.test("Marca: Puma"))
console.log(validarMarca2.test("Marca: Asics"))
console.log(validarMarca2.test("Marca: hello"))
console.log(validarMarca2.test("Marca: hello"))






