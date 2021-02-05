const digitos =  /\d+/;

console.log(digitos.exec("tem um numero 100 aqui", "Aqui ja nao tem nada", "25"))
console.log(digitos.exec("tem um numero aqui"))
