
const validarID = /\d+\ID\b/;   //  \d << qual quer numero...    \b  << termine com os ultimo valor nocaso ID...

console.log(validarID.test("123ID"))
console.log(validarID.test("123"))
console.log(validarID.test("asdID"))
console.log(validarID.test("asd"))

