const reg = /\w+: (Matheus|joao|Maria)/;

console.log(reg.test("Nome: Matheus"))
console.log(reg.test("Nome: Jose"))
console.log(reg.test("Nome: Maria"))
console.log(reg.test("Nome: Santos"))
