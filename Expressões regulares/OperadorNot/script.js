const notab = /[^ab]/;

console.log(notab.test('a')) // como o a esta issolado ele vai pegar e  negala.
console.log(notab.test('Aqui tem a')); // se o A ou o B nao estiver isolado como console.log de cima ele vai aceita 

const nottoaz = /[^a-z]/;

console.log(nottoaz.test('asdadsdasdasdasdd'));
console.log(nottoaz.test('1')); // lembrando vai da fase somente para o valores de a ate z que estiverem isolados.
console.log(nottoaz.test('asdasda asdasdasd')); // como separei os caracteres em 2 partes ele deu true pois nao se trata de uma frase apenas.

